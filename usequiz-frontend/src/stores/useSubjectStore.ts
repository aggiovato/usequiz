import { create } from "zustand";
import { SubjectType } from "../types/types";

interface SubjectStore {
  subjects: SubjectType[];
  lettersMap: Record<string, string>;
  setSubjects: (subjects: SubjectType[]) => void;
  setLettersMap: (lettersMap: Record<string, string>) => void;
}

const useSubjectStore = create<SubjectStore>((set) => ({
  subjects: [],
  lettersMap: {},
  setSubjects: (subjects: SubjectType[]) => set({ subjects }),
  setLettersMap: (lettersMap: Record<string, string>) => set({ lettersMap }),
}));

export default useSubjectStore;
