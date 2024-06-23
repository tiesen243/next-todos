import type { NextPage } from 'next'

import { CardDescription, CardTitle } from '@ui/card'
import { EditTodo } from './_edit-todo'
import { api } from '@/lib/trpc/server'
import { ToggleState } from '@/components/toggle-state'
import { DeleteTodo } from '@/components/delete-todo'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  const todo = await api.todo.getOne({ id })

  return (
    <>
      <CardTitle className="mb-2">
        <EditTodo id={todo.id} content={todo.title} type="title" />
      </CardTitle>
      <CardDescription>{todo.createdAt.toDateString()}</CardDescription>

      <hr className="my-4" />

      <EditTodo id={todo.id} content={todo.content} type="content" />

      <hr className="my-4" />

      <div className="grid grid-cols-2 gap-4">
        <ToggleState todoId={todo.id} state={todo.state} />
        <DeleteTodo todoId={todo.id} />
      </div>
    </>
  )
}

export default Page
