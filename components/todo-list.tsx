'use client'

import Link from 'next/link'

import { api } from '@/lib/trpc/react'
import { DeleteTodo } from '@/components/delete-todo'
import { ToggleState } from '@/components/toggle-state'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card'

export const TodoList: React.FC = () => {
  const { data: todos, isLoading } = api.todo.getAll.useQuery()

  if (isLoading || !todos) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <Card key={todo.id}>
          <Link href={`/dashboard/${todo.id}`} passHref>
            <CardHeader>
              <CardTitle className="line-clamp-1">{todo.title}</CardTitle>
              <CardDescription>{todo.createdAt.toDateString()}</CardDescription>
            </CardHeader>

            <CardContent className="line-clamp-1 pb-0">{todo.content}</CardContent>
          </Link>

          <CardFooter className="mt-4 grid grid-cols-2 gap-2">
            <ToggleState todoId={todo.id} state={todo.state} />
            <DeleteTodo todoId={todo.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
