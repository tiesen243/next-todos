import { Input } from './ui/input'
import { Label } from './ui/label'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string[]
}

export const FormField: React.FC<FormFieldProps> = ({ label, error, ...props }) => (
  <div className="space-y-2">
    {label && <Label htmlFor={props.name}>{label}</Label>}
    <Input {...props} />
    {error && <p className="text-sm text-destructive">{error.at(0)}</p>}
  </div>
)
