'use client'

import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

interface Props {
  todoId: string
}

export const DeleteTodo: React.FC<Props> = (todo) => {
  const queryClient = useQueryClient()
  const { mutate, isPending } = api.todo.delete.useMutation({
    onSuccess: () => queryClient.invalidateQueries({ queryKey: getQueryKey(api.todo.getAll) }),
  })

  const handleClick = async () => mutate({ id: todo.todoId })

  return (
    <Button variant="destructive" className="w-full" onClick={handleClick} isLoading={isPending}>
      Delete
    </Button>
  )
}
