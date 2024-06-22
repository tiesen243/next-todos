import { Slot } from '@radix-ui/react-slot'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

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
