import type { User } from '@clerk/nextjs/server'
import type { Todo } from '@prisma/client'
import Image from 'next/image'

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

interface TodoProps {
  todo: Todo & {
    user: User
  }
}
export const TodoCard: React.FC<TodoProps> = ({ todo }) => (
  <Card>
    <CardHeader className="flex-row gap-4">
      <Image
        src={todo.user.imageUrl}
        alt={todo.user.username ?? ''}
        width={50}
        height={50}
        className="aspect-square rounded-full"
      />

      <div className="flex flex-col gap-1">
        <CardTitle>{todo.user.fullName}</CardTitle>
        <CardDescription>
          {todo.user.username} - {todo.createdAt.toDateString()}
        </CardDescription>
      </div>
    </CardHeader>

    <CardContent>
      <CardTitle>{todo.title}</CardTitle>
      <CardDescription className="mt-4 line-clamp-1 break-all">{todo.content}</CardDescription>
    </CardContent>

    <CardFooter className="grid grid-cols-2 gap-2">
      <ToggleState todoId={todo.id} state={todo.state} />
      <DeleteTodo todoId={todo.id} />
    </CardFooter>
  </Card>
)
