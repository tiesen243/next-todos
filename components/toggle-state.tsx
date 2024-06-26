'use client'

import type { STATE } from '@prisma/client'

import { api } from '@/lib/trpc/react'
import { Button } from '@ui/button'

interface Props {
  todoId: string
  state: STATE
}

export const ToggleState: React.FC<Props> = (todo) => {
  const { mutate, isPending, data } = api.todo.toggleState.useMutation()

  const handleClick = () => {
    mutate({ id: todo.todoId })
  }
  return (
    <Button className="w-full" onClick={handleClick} isLoading={isPending}>
      {data ? data : todo.state}
    </Button>
  )
}
