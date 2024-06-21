import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc'
import { clerkClient } from '@clerk/nextjs/server'
import { TRPCError } from '@trpc/server'

export const todoRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.todo.findMany()

    const posts = await Promise.all(
      data.map(async (post) => ({
        ...post,
        user: await clerkClient.users.getUser(post.userId),
      })),
    )

    return posts
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