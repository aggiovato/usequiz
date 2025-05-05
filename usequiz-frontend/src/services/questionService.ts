import axios from "axios";
import { QuestionType, RouteParamsType } from "../types/types";

const baseURL = import.meta.env.VITE_BACKEND_BASEURL as string;

export const getSubjects = async () => {
  try {
    const res = await axios.get(baseURL + "/subjects");
    return res.data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return [];
  }
};

export const getUnits = async (subject: string) => {
  const encodedSubject = encodeURIComponent(subject);
  try {
    const res = await axios.get(
      baseURL + "/subjects/" + encodedSubject + "/units"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching units:", error);
    return [];
  }
};

export const getAllQuestions = async () => {
  try {
    const res = await axios.get(baseURL + "/questions");
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export const getQuestionsBySubject = async ({
  subject,
}: RouteParamsType): Promise<QuestionType[]> => {
  if (!subject) throw new Error("Subject is required");
  const encodedSubject = encodeURIComponent(subject);
  try {
    const res = await axios.get(
      `${baseURL}/subjects/${encodedSubject}/questions`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export const getQuestionsBySubjectUnit = async ({
  subject,
  unit,
}: RouteParamsType): Promise<QuestionType[]> => {
  if (!subject || !unit) throw new Error("Subject and Unit are required");

  const encodedSubject = encodeURIComponent(subject);
  const encodedUnit = encodeURIComponent(unit);

  try {
    const res = await axios.get(
      `${baseURL}/subjects/${encodedSubject}/units/${encodedUnit}/questions`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
