'use client'

import { api } from '@/lib/trpc/react'
import { TodoCard } from './todo-card'

export const TodoList: React.FC = () => {
  const { isLoading, data: todos } = api.todo.getAll.useQuery()

  if (isLoading || !todos) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
