'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

interface Props {
  todoId: string
}

export const DeleteTodo: React.FC<Props> = (todo) => {
  const router = useRouter()
  const { mutate, isPending } = api.todo.delete.useMutation({
    onSuccess: () => router.refresh(),
  })

  const handleClick = async () => mutate({ id: todo.todoId })

  return (
    <Button variant="destructive" className="w-full" onClick={handleClick} isLoading={isPending}>
      Delete
    </Button>
  )
}