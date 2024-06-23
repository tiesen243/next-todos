import type { User } from '@clerk/nextjs/server'
import type { Todo } from '@prisma/client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DeleteTodo } from './delete-todo'
import { ToggleState } from './toggle-state'
import Link from 'next/link'

interface TodoProps {
  todo: Todo & {
    user: User
  }
}
export const TodoCard: React.FC<TodoProps> = ({ todo }) => (
  <Card>
    <Link href={`/dashboard/${todo.id}`} passHref>
      <CardHeader>
        <CardTitle className="line-clamp-1">{todo.title}</CardTitle>
        <CardDescription>{todo.createdAt.toDateString()}</CardDescription>
      </CardHeader>

      <CardContent className="line-clamp-1 pb-0">{todo.content}</CardContent>
    </Link>

    <CardFooter className="mt-4 grid grid-cols-2 gap-2">
      <ToggleState todoId={todo.id} state={todo.state} />
      <DeleteTodo todoId={todo.id} />
    </CardFooter>
  </Card>
)
