'use client'

import type { NextPage } from 'next'
import Link from 'next/link'

import { TodoList } from '@/components/todo-list'
import { buttonVariants } from '@ui/button'

const Page: NextPage = () => (
  <>
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Todos</h1>
      <Link className={buttonVariants()} href="/dashboard/create-todo">
        Add Todo
      </Link>
    </div>

    <TodoList />
  </>
)

export default Page
