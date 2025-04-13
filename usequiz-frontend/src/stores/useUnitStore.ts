import { create } from "zustand";
import { UnitType } from "../types/types";

interface UnitStore {
  units: UnitType[];
  lettersMap: Record<string, string>;
  setUnits: (units: UnitType[]) => void;
  setLettersMap: (lettersMap: Record<string, string>) => void;
}

const useUnitStore = create<UnitStore>((set) => ({
  units: [],
  lettersMap: {},
  setUnits: (units: UnitType[]) => set({ units }),
  setLettersMap: (lettersMap: Record<string, string>) => set({ lettersMap }),
}));

export default useUnitStore;
