'use client'

import { api } from '@/lib/trpc/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
  id: string
  content: string | null
  type: 'title' | 'content'
}
export const Edit: React.FC<Props> = ({ id, content, type }) => {
  const router = useRouter()
  const { mutate, isPending } = api.todo.update.useMutation({
    onSuccess: () => router.refresh(),
  })

  const handleBlur = (e: React.FocusEvent<HTMLParagraphElement>) => {
    const content = e.currentTarget.textContent ?? ''
    mutate({ id, [type]: content })
    e.currentTarget.contentEditable = 'false'
    toast.success(`Todo's ${type} updated`)
  }

  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.currentTarget.contentEditable = 'true'
  }

  return (
    <p className="w-fit max-w-full break-words" onBlur={handleBlur} onClick={handleClick}>
      {isPending ? 'Saving...' : content}
    </p>
  )
}
