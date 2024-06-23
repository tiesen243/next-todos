'use client'

import { XIcon } from 'lucide-react'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'

import { CreateTodo } from '@/components/create-todo'
import { Card } from '@ui/card'

const Page: NextPage = () => {
  const router = useRouter()

  return (
    <div className="fixed inset-0 grid h-dvh w-svw place-items-center ">
      <div
        onClick={() => router.back()}
        className="absolute h-full w-full bg-background/50 backdrop-blur-xl backdrop-saturate-150"
      />
      <Card className="z-20 w-svw max-w-screen-md">
        <XIcon
          onClick={() => router.back()}
          className="absolute right-2 top-2 z-10 cursor-pointer"
        />
        <CreateTodo />
      </Card>
    </div>
  )
}

export default Page
