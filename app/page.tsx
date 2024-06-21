import type { NextPage } from 'next'

import { TodoCard } from '@/components/todo-card'
import { api } from '@/lib/trpc/server'
import { CreateTodo } from '@/components/create-todo'
import { auth } from '@clerk/nextjs/server'

const Page: NextPage = async () => {
  const { userId } = auth()
  try {
    const todos = await api.todo.getAll()

    return (
      <>
        {userId && <CreateTodo />}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} isAuthed={!!userId} />
          ))}
        </div>
      </>
    )
  } catch (error) {
    return (
      <div className="grid h-[80dvh] place-items-center">
        <h1 className="text-2xl font-bold">Login to see your todos</h1>
      </div>
    )
  }
}

export default Page
