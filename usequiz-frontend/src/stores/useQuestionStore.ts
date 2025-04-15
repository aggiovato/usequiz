import { create } from "zustand";
import { QuestionType } from "../types/types";

interface QuestionState {
  questions: QuestionType[];
  index: number;
  currentQ: QuestionType | null;
  setQuestions: (questions: QuestionType[]) => void;
  setIndex: (index: number) => void;
  setCurrentQ: (currentQ: QuestionType | null) => void;
}

const initialCurrentQ: QuestionType | null = JSON.parse(
  localStorage.getItem("currentQ") || "null"
);

export const useQuestionStore = create<QuestionState>((set) => ({
  questions: [],
  index: 0,
  currentQ: initialCurrentQ,
  setQuestions: (questions) => set({ questions }),
  setIndex: (index) => set({ index }),
  setCurrentQ: (currentQ) => {
    set({ currentQ });
    localStorage.setItem("currentQ", JSON.stringify(currentQ));
  },
}));
