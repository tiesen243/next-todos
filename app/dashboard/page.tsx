import type { NextPage } from 'next'
import Link from 'next/link'

import { TodoCard } from '@/components/todo-card'
import { buttonVariants } from '@/components/ui/button'
import { api } from '@/lib/trpc/server'

const Page: NextPage = async () => {
  const todos = await api.todo.getAll()

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Todos</h1>
        <Link className={buttonVariants()} href="/dashboard/create-todo">
          Add Todo
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}

export default Page
