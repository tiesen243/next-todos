'use client'

import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query'
import { toast } from 'sonner'

import { api } from '@/lib/trpc/react'
import { Button } from '@ui/button'
import { useRouter } from 'next/navigation'

interface Props {
  todoId: string
}

export const DeleteTodo: React.FC<Props> = (todo) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate, isPending } = api.todo.delete.useMutation({
    onSuccess: async () => {
      toast.success('Todo deleted')
      await queryClient.invalidateQueries({ queryKey: getQueryKey(api.todo.getAll) })
      router.push('/')
    },
  })

  const handleClick = async () => mutate({ id: todo.todoId })

  return (
    <Button variant="destructive" className="w-full" onClick={handleClick} isLoading={isPending}>
      Delete
    </Button>
  )
}
