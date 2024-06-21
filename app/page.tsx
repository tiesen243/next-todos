import type { NextPage } from 'next'

import { TodoCard } from '@/components/todo-card'
import { api } from '@/lib/trpc/server'
import { CreateTodo } from '@/components/create-todo'
import { auth } from '@clerk/nextjs/server'

const Page: NextPage = async () => {
  const { userId } = auth()
  const todos = await api.todo.getAll()

  return (
    <>
      {userId && <CreateTodo />}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}

export default Page
