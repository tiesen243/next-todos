'use client'

import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { api } from '@/lib/trpc/react'
import { FormField } from '@/components/form-field'
import { Button } from '@ui/button'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card'
import { Textarea } from '@ui/textarea'

export const CreateTodo: React.FC = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate, isPending, error } = api.todo.create.useMutation({
    onSuccess: async () => {
      toast.success('Todo created')
      router.back()
      await queryClient.invalidateQueries({ queryKey: getQueryKey(api.todo.getAll) })
    },
  })

  const action = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as { title: string; content: string }
    mutate(data)
  }

  return (
    <>
      <CardHeader>
        <CardTitle>Add new todo</CardTitle>
        <CardDescription>Fill out the form below to add a new todo</CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-4">
          <FormField
            label="Title"
            name="title"
            disabled={isPending}
            error={error?.data?.zodError?.title}
          />
          <FormField label="Content" name="content" error={error?.data?.zodError?.content} asChild>
            <Textarea disabled={isPending} />
          </FormField>
        </CardContent>

        <CardFooter className="grid grid-cols-2">
          <Button className="col-start-2" isLoading={isPending}>
            Add
          </Button>
        </CardFooter>
      </form>
    </>
  )
}
