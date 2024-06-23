import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { clerkClient } from '@clerk/nextjs/server'
import { TRPCError } from '@trpc/server'

export const todoRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.todo.findMany({
      where: { userId: ctx.session.userId },
    })

    const posts = await Promise.all(
      data.map(async (post) => ({
        ...post,
        user: await clerkClient.users.getUser(post.userId),
      })),
    )

    return posts
  }),

  getOne: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ input, ctx }) => {
    const post = await ctx.db.todo.findUnique({ where: { id: input.id } })
    if (!post) throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' })

    return post
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string().min(1), content: z.string().min(1) }))
    .mutation(async ({ input, ctx }) => {
      const newPost = await ctx.db.todo.create({
        data: {
          ...input,
          userId: ctx.session.userId,
        },
      })
      return newPost
    }),

  toggleState: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.db.todo.findUnique({ where: { id: input.id } })
      if (!post) throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' })

      if (post.userId !== ctx.session.userId)
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You do not have permission to update this post',
        })

      const newState = post.state === 'ACTIVE' ? 'COMPLETED' : 'ACTIVE'

      await ctx.db.todo.update({
        where: { id: input.id },
        data: { state: newState },
      })

      return newState
    }),

  update: protectedProcedure
    .input(
      z.object({ id: z.string(), title: z.string().optional(), content: z.string().optional() }),
    )
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.db.todo.findUnique({ where: { id: input.id } })
      if (!post) throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' })

      if (post.userId !== ctx.session.userId)
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You do not have permission to update this post',
        })

      const newData = await ctx.db.todo.update({
        where: { id: input.id },
        data: { title: input.title ?? post.title, content: input.content ?? post.content },
      })

      return newData
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.db.todo.findUnique({ where: { id: input.id } })
      if (!post) throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' })

      if (post.userId !== ctx.session.userId)
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You do not have permission to delete this post',
        })

      await ctx.db.todo.delete({ where: { id: input.id } })

      return true
    }),
})
