'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { api } from '@/lib/trpc/react'

interface Props {
  id: string
  content: string | null
  type: 'title' | 'content'
}

export const EditTodo: React.FC<Props> = ({ id, content, type }) => {
  const router = useRouter()
  const { mutate, isPending } = api.todo.update.useMutation({
    onSuccess: () => router.refresh(),
  })

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const content = e.currentTarget.textContent ?? ''
    mutate({ id, [type]: content })
    e.currentTarget.contentEditable = 'false'
    toast.success(`Todo's ${type} updated`)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) =>
    (e.currentTarget.contentEditable = 'true')

  return (
    <article className="w-fit max-w-full break-words" onBlur={handleBlur} onClick={handleClick}>
      {isPending ? 'Saving...' : content}
    </article>
  )
}
