import { create } from "zustand";
import { SubjectType } from "../types/types";
import { persist } from "zustand/middleware";

interface SubjectStore {
  subjects: SubjectType[];
  lettersMap: Record<string, string>;
  isRefreshing: boolean;
  setSubjects: (subjects: SubjectType[]) => void;
  setLettersMap: (lettersMap: Record<string, string>) => void;
  setIsRefreshing: (isRefreshing: boolean) => void;
}

const useSubjectStore = create<SubjectStore>()(
  persist(
    // to save in localStorage
    (set) => ({
      subjects: [],
      lettersMap: {},
      isRefreshing: false,
      setSubjects: (subjects) => set({ subjects }),
      setLettersMap: (lettersMap) => set({ lettersMap }),
      setIsRefreshing: (isRefreshing) => set({ isRefreshing }),
    }),
    {
      name: "subject-storage", // key in localStorage
      partialize: (state) => ({
        subjects: state.subjects,
        lettersMap: state.lettersMap,
        isRefreshing: state.isRefreshing,
      }),
    }
  )
);

export default useSubjectStore;
