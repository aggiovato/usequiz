import { create } from "zustand";
import { UnitType } from "../types/types";
import { persist } from "zustand/middleware";

interface UnitStore {
  units: UnitType[];
  lettersMap: Record<string, string>;
  isLoading: boolean;
  setUnits: (units: UnitType[]) => void;
  setLettersMap: (lettersMap: Record<string, string>) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const useUnitStore = create<UnitStore>()(
  persist(
    // to save in localStorage
    (set) => ({
      units: [],
      lettersMap: {},
      isLoading: false,
      setUnits: (units) => set({ units }),
      setLettersMap: (lettersMap) => set({ lettersMap }),
      setIsLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: "unit-storage", // key in localStorage
      partialize: (state) => ({
        units: state.units,
        lettersMap: state.lettersMap,
        isLoading: state.isLoading,
      }),
    }
  )
);

export default useUnitStore;
