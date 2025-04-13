import { getLetter } from "../services/letterService";
import { getUnits } from "../services/questionService";
import useUnitStore from "../stores/useUnitStore";
import { UnitType } from "../types/types";

export const unitsLoader = async ({
  params,
}: {
  params: Record<string, string | undefined>;
}) => {
  if (!params.subject) return [];

  const units = await getUnits(params.subject as string);

  const lettersResponse = await Promise.all(
    units.map(async (unit: UnitType) => {
      const firstLetter = unit.title[0].toUpperCase();
      const letterData: string = await getLetter(firstLetter);
      return { unit, svg: letterData };
    })
  );

  const lettersMap: Record<string, string> = {};
  lettersResponse.forEach(({ unit, svg }) => {
    lettersMap[unit.title] = svg;
  });

  useUnitStore.getState().setUnits(units);
  useUnitStore.getState().setLettersMap(lettersMap);

  return { units, lettersMap };
};
