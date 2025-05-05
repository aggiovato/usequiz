// components/forms/COptionsEditor.tsx
import {
  UseFormRegister,
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldPath,
} from "react-hook-form";
import CTextarea from "./CTextarea";
import { QuestionType } from "../../types/question";

interface COptionsEditorProps {
  fields: FieldArrayWithId<QuestionType, "options", "id">[];
  register: UseFormRegister<QuestionType>;
  append: UseFieldArrayAppend<QuestionType, "options">;
  remove: UseFieldArrayRemove;
  watchAnswers: string[];
  setAnswers: (answers: string[]) => void;
}

export default function COptionsEditor({
  fields,
  register,
  append,
  remove,
  watchAnswers,
  setAnswers,
}: COptionsEditorProps) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const toggleAnswer = (id: string) => {
    if (watchAnswers.includes(id)) {
      setAnswers(watchAnswers.filter((a) => a !== id));
    } else {
      setAnswers([...watchAnswers, id]);
    }
  };

  const addOption = () => {
    if (fields.length < alphabet.length) {
      append({ id: alphabet[fields.length], text: "" });
    }
  };

  return (
    <div className="relative flex flex-col w-full">
      <label className="block text-teal-strong text-sm font-bold">
        Answer options
      </label>

      <div className="h-full min-h-[250px] max-h-[250px] overflow-y-auto">
        {fields.map((field, index) => {
          const optionPath = `options.${index}.text` as FieldPath<QuestionType>;

          return (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={watchAnswers.includes(alphabet[index])}
                onChange={() => toggleAnswer(alphabet[index])}
                className="accent-teal-bright w-4 h-4"
              />
              <span className="font-bold text-dark-teal w-5">
                {`${alphabet[index]})`}
              </span>
              <CTextarea<QuestionType>
                label=""
                name={optionPath}
                register={register}
                rows={1}
                className="flex-1"
              />
              <input
                type="hidden"
                {...register(`options.${index}.id` as const)}
                value={alphabet[index]}
              />
              {fields.length > 2 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-ghost text-sm"
                  title="Eliminar opción"
                >
                  ✖
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 sticky bottom-0 flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={addOption}>
          + Añadir opción
        </button>
      </div>
    </div>
  );
}
