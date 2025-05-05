import { TextareaHTMLAttributes } from "react";
import { UseFormRegister, FieldValues, FieldPath } from "react-hook-form";

interface CTextareaProps<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: FieldPath<T>;
  register: UseFormRegister<T>;
}

export default function CTextarea<T extends FieldValues>({
  label,
  name,
  register,
  ...props
}: CTextareaProps<T>) {
  return (
    <div className="w-full space-y-1">
      <label className="block text-teal-strong text-sm font-bold">
        {label}
      </label>
      <textarea
        {...register(name)}
        {...props}
        className="input-field resize-none"
      />
    </div>
  );
}
