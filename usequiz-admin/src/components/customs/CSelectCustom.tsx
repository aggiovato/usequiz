import { useEffect, useRef, useState } from "react";
import {
  FieldPath,
  UseFormSetValue,
  FieldValues,
  PathValue,
} from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface Option {
  value: string;
  label: string;
}

interface CSelectCustomProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  value: PathValue<T, FieldPath<T>>;
  setValue: UseFormSetValue<T>;
  options: Option[];
}

export default function CSelectCustom<T extends FieldValues>({
  label,
  name,
  value,
  setValue,
  options,
}: CSelectCustomProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (val: PathValue<T, FieldPath<T>>) => {
    setValue(name, val);
    setIsOpen(false);
  };

  return (
    <div className="w-full space-y-1 relative" ref={ref}>
      <label className="block text-teal-strong text-sm font-bold">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="input-field flex items-center justify-between cursor-pointer"
      >
        <span>{selected?.label || "Selecciona una opción"}</span>
        <ChevronDownIcon className="w-4 h-4 text-teal-strong" />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 z-50 w-full bg-light-teal border border-teal-bright rounded shadow-md">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                onClick={() =>
                  handleSelect(opt.value as PathValue<T, FieldPath<T>>)
                }
                className={`px-4 py-2 text-sm cursor-pointer transition 
                ${
                  isSelected
                    ? "text-amber-glow font-bold"
                    : "text-dark-teal hover:bg-teal-bright/10 hover:text-amber-glow"
                }`}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
