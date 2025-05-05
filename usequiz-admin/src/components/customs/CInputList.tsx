import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldValues, FieldPath } from "react-hook-form";

interface CInputListProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: string[];
  name: FieldPath<T>;
  register: UseFormRegister<T>;
}

export default function CInputList<T extends FieldValues>({
  label,
  options,
  name,
  register,
  ...props
}: CInputListProps<T>) {
  const listId = `${name}-list`;

  return (
    <div className="w-full space-y-1">
      <label className="block text-teal-strong text-sm font-bold">
        {label}
      </label>
      <input
        {...register(name)}
        {...props}
        list={listId}
        className="input-field"
      />
      <datalist id={listId}>
        {options.map((opt) => (
          <option key={opt} value={opt} />
        ))}
      </datalist>
    </div>
  );
}
