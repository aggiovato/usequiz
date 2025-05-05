import useQuestionForm from "../../hooks/useQuestionForm";
import CInputList from "../../components/customs/CInputList";
import CTextarea from "../../components/customs/CTextarea";
import COptionsEditor from "../../components/customs/COptionsEditor";
import CSelectCustom from "../../components/customs/CSelectCustom";
import CInputTagList from "../../components/customs/CInputTagList";
import { QuestionType } from "../../types/question";
import { difficultyOptions } from "../../utils/data/constants";

export default function QuestionForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    fields,
    append,
    remove,
    allSubjects,
    allTags,
    units,
    isEdit,
    onSubmit,
  } = useQuestionForm();

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold">
        {isEdit ? "Editar pregunta" : "Crear pregunta"}
      </h2>
      <hr className="my-4" />
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna 1 */}
          <div className="space-y-6 order-1 md:order-1">
            <CInputList
              label="Subject"
              name="subject"
              register={register}
              placeholder="Select or write a subject"
              options={allSubjects}
            />

            <CInputList
              label="Unit"
              name="unit.title"
              register={register}
              placeholder="Select or write a unit"
              options={units}
            />

            <CTextarea
              label="Explanation"
              name="explanation"
              register={register}
              rows={4}
              placeholder="Write your explanation here"
            />

            <CInputTagList
              name="tags"
              label="Etiquetas"
              placeholder="Separadas por coma"
              existingTags={allTags}
              control={control}
              setValue={setValue}
            />

            <CSelectCustom<QuestionType>
              label="Dificultad"
              name="difficulty"
              value={watch("difficulty")}
              setValue={setValue}
              options={difficultyOptions}
            />
          </div>

          {/* Columna 2 */}
          <div className="space-y-6 order-2 md:order-2">
            <CTextarea
              label="Question"
              name="question"
              register={register}
              rows={1}
              placeholder="Write your question here"
            />

            <CTextarea
              label="Code"
              name="code"
              register={register}
              rows={2}
              placeholder="Optional code block"
            />

            <COptionsEditor
              fields={fields}
              register={register}
              append={append}
              remove={remove}
              watchAnswers={watch("answers")}
              setAnswers={(answers) => setValue("answers", answers)}
            />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center mt-12">
          <button type="submit" className="btn btn-primary btn-icon">
            {isEdit ? "Actualizar pregunta" : "Guardar pregunta"}
          </button>
        </div>
      </form>
    </section>
  );
}
