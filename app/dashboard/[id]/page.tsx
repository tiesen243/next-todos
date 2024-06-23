import type { NextPage } from 'next'

import { CardDescription, CardTitle } from '@/components/ui/card'
import { api } from '@/lib/trpc/server'
import { Edit } from './edit'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  const todo = await api.todo.getOne({ id })

  return (
    <>
      <CardTitle className="mb-2">
        <Edit id={id} content={todo.title} type="title" />
      </CardTitle>
      <CardDescription>{todo.createdAt.toDateString()}</CardDescription>

      <hr className="my-4" />

      <Edit id={id} content={todo.content} type="content" />
    </>
  )
}

export default Page
