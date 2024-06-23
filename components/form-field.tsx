import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { Input } from '@ui/input'
import { Label } from '@ui/label'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string[]
  asChild?: boolean
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  className,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : Input

  return (
    <div className={cn('space-y-2', className)}>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Comp {...props} />
      {error && <p className="text-sm text-destructive">{error.at(0)}</p>}
    </div>
  )
}
