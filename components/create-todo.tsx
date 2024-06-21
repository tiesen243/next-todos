'use client'

import { useRouter } from 'next/navigation'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { api } from '@/lib/trpc/react'

export const CreateTodo: React.FC = () => {
  const router = useRouter()
  const { mutate, isPending, error } = api.todo.create.useMutation({
    onSuccess: () => router.refresh(),
  })

  const action = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    e.preventDefault()
    const data = Object.fromEntries(new FormData(form)) as { title: string; content: string }
    mutate(data)
    form.reset()
  }

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
      </CardHeader>

      <form onSubmit={action}>
        <CardContent className="space-y-4">
          <FormField name="title" label="Title" error={error?.data?.zodError?.title} />
          <FormField name="content" label="Content" error={error?.data?.zodError?.content} />
        </CardContent>

        <CardFooter>
          <Button className="w-full" isLoading={isPending}>
            Create Todo
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
