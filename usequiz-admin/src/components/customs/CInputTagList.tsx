import { useEffect, useRef, useState } from "react";
import { Control, UseFormSetValue, useWatch } from "react-hook-form";
import { QuestionType } from "../../types/question";

interface CInputTagListProps {
  name: keyof QuestionType;
  label?: string;
  placeholder?: string;
  existingTags?: string[];
  control: Control<QuestionType>;
  setValue: UseFormSetValue<QuestionType>;
}

export default function CInputTagList({
  name,
  label,
  placeholder,
  existingTags = [],
  control,
  setValue,
}: CInputTagListProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const selectedTags = useWatch({ name, control }) as string[];

  const handleAddTag = (tag: string) => {
    tag = tag.trim();
    if (tag && selectedTags!.includes(tag)) {
      setValue(name, [
        ...selectedTags,
        tag,
      ] as QuestionType[keyof QuestionType]);
    }
    setInputValue("");
  };

  const handleRemoveTag = (tag: string) => {
    const updated = selectedTags.filter((t: string) => t !== tag);
    setValue(name, updated as QuestionType[keyof QuestionType]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["Enter", ","].includes(e.key)) {
      e.preventDefault();
      handleAddTag(inputValue);
    }
  };

  useEffect(() => {
    if (inputValue) {
      const lower = inputValue.toLowerCase();
      const filtered = existingTags.filter(
        (tag) =>
          tag.toLowerCase().includes(lower) && !selectedTags.includes(tag)
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [inputValue, existingTags, selectedTags]);

  return (
    <div className="flex flex-col gap-2 w-full relative">
      {label && (
        <label className="block text-teal-strong text-sm font-bold">
          {label}
        </label>
      )}

      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <span
            key={tag}
            className="bg-teal-bright text-white px-2 py-1 rounded-md text-sm flex items-center gap-1"
          >
            {tag}
            <button
              type="button"
              className="ml-1 text-xs text-amber-glow hover:text-rose-clay"
              onClick={() => handleRemoveTag(tag)}
              title="Eliminar etiqueta"
            >
              ✕
            </button>
          </span>
        ))}
      </div>

      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        placeholder={placeholder || "Escribe una etiqueta y pulsa Enter"}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input-field"
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-md w-full max-h-40 overflow-y-auto">
          {suggestions.map((tag) => (
            <li
              key={tag}
              onClick={() => handleAddTag(tag)}
              className="px-4 py-2 cursor-pointer text-sm hover:bg-teal-100 hover:text-dark-teal"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
