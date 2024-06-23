'use client'

import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { api } from '@/lib/trpc/react'
import { Button } from '@ui/button'

interface Props {
  todoId: string
}

export const DeleteTodo: React.FC<Props> = (todo) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate, isPending } = api.todo.delete.useMutation({
    onSuccess: async () => {
      toast.success('Todo deleted')
      router.push('/dashboard')
      await queryClient.invalidateQueries({ queryKey: getQueryKey(api.todo.getAll) })
    },
  })

  const handleClick = async () => mutate({ id: todo.todoId })

  return (
    <Button variant="destructive" className="w-full" onClick={handleClick} isLoading={isPending}>
      Delete
    </Button>
  )
}
