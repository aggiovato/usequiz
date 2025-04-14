import { create } from "zustand";
import { QuestionType } from "../types/types";

interface QuestionState {
  questions: QuestionType[];
  currentQ: QuestionType | null;
  setQuestions: (questions: QuestionType[]) => void;
  setCurrentQ: (currentQ: QuestionType | null) => void;
}

const initialCurrentQ: QuestionType | null = JSON.parse(
  localStorage.getItem("currentQ") || "null"
);

export const useQuestionStore = create<QuestionState>((set) => ({
  questions: [],
  currentQ: initialCurrentQ,
  setQuestions: (questions) => set({ questions }),
  setCurrentQ: (currentQ) => {
    set({ currentQ });
    localStorage.setItem("currentQ", JSON.stringify(currentQ));
  },
}));
