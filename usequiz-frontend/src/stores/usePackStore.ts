// This is a package for all questions

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { QuestionType } from "../types/types";

interface PackStats {
  viewed: string[]; // ids of questions viewed
  correct: string[]; // ids of questions correct
  incorrect: string[]; // ids of questions incorrect
  startTime: number;
}

interface PackState {
  questions: QuestionType[];
  currentIndex: number;
  currentQ: QuestionType | null;
  stats: PackStats;
  routeFrom: string;
  setQuestions: (questions: QuestionType[], routeFrom: string) => void;
  setCurrentQ: (currentQ: QuestionType | null) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  verifyAnswer: (id: string, correct: boolean) => void;
  resetPack: () => void;
}

export const usePackStore = create<PackState>()(
  persist(
    // to save in localStorage
    (set, get) => ({
      questions: [],
      currentIndex: 0,
      currentQ: null,
      routeFrom: "",
      stats: {
        viewed: [],
        correct: [],
        incorrect: [],
        startTime: 0,
      },

      setQuestions: (questions, routeFrom) =>
        set({
          questions,
          currentIndex: 0,
          currentQ: questions[0] || null,
          routeFrom,
          stats: {
            viewed: [],
            correct: [],
            incorrect: [],
            startTime: Date.now(),
          },
        }),

      setCurrentQ: (currentQ) =>
        set({
          currentQ,
        }),

      nextQuestion: () => {
        const { currentIndex, questions } = get();
        const next = currentIndex + 1;
        if (next < questions.length) {
          set({
            currentIndex: next,
            currentQ: questions[next],
          });
        }
      },

      prevQuestion: () => {
        const { currentIndex, questions } = get();
        const prev = currentIndex - 1;
        if (prev >= 0) {
          set({
            currentIndex: prev,
            currentQ: questions[prev],
          });
        }
      },

      verifyAnswer: (id, correct) => {
        const { stats } = get();
        set({
          stats: {
            ...stats,
            viewed: [...new Set([...stats.viewed, id])],
            correct: correct ? [...stats.correct, id] : stats.correct,
            incorrect: !correct ? [...stats.incorrect, id] : stats.incorrect,
          },
        });
      },

      resetPack: () =>
        set({
          questions: [],
          currentIndex: 0,
          currentQ: null,
          routeFrom: "",
          stats: {
            viewed: [],
            correct: [],
            incorrect: [],
            startTime: 0,
          },
        }),
    }),
    {
      name: "pack-storage", // key in localStorage
      partialize: (state) => ({
        questions: state.questions,
        currentIndex: state.currentIndex,
        currentQ: state.currentQ,
        stats: state.stats,
        routeFrom: state.routeFrom,
      }),
    }
  )
);
