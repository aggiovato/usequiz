import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { QuestionType } from "../types/question";
import {
  getSubjects,
  getUnits,
  getAllTags,
  createQuestion,
  getQuestionById,
  updateQuestion,
} from "../services/questions";

const useQuestionForm = () => {
  const [allSubjects, setAllSubjects] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [units, setUnits] = useState<string[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const { register, handleSubmit, watch, setValue, control, reset } =
    useForm<QuestionType>({
      defaultValues: {
        subject: "",
        unit: { order: 1, title: "" },
        question: "",
        code: "",
        options: [
          { id: "a", text: "" },
          { id: "b", text: "" },
        ],
        answers: [],
        explanation: "",
        tags: [],
        difficulty: "medium",
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const subject = watch("subject");

  // Fetch subjects once
  useEffect(() => {
    getSubjects().then((res) => setAllSubjects(res.map((s) => s.subject)));
    getAllTags().then((res) => setAllTags(res));
  }, []);

  // Fetch units dynamically
  useEffect(() => {
    if (subject) {
      getUnits(subject).then((res) => setUnits(res.map((u) => u.title)));
    }
  }, [subject]);

  // Edit mode: pre-fill data
  useEffect(() => {
    if (isEdit && id) {
      getQuestionById(id).then((q) => {
        reset({
          ...q,
          unit: q!.unit || { order: 1, title: "" },
          answers: q!.answers,
        });
      });
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (data: QuestionType) => {
    const success =
      isEdit && id
        ? await updateQuestion(id, data)
        : await createQuestion(data);

    if (success) {
      alert(`Pregunta ${isEdit ? "actualizada" : "creada"} correctamente`);
      navigate("/"); // o /questions
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    fields,
    append,
    remove,
    subject,
    allSubjects,
    allTags,
    units,
    isEdit,
    onSubmit,
  };
};

export default useQuestionForm;
