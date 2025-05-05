// src/services/questions.ts
import axios from "axios";
import { QuestionType } from "../types/question";

const baseURL = import.meta.env.VITE_BACKEND_BASEURL as string;

interface SubjectResponse {
  subject: string;
}
interface UnitResponse {
  title: string;
}

// GET /subjects
export const getSubjects = async (): Promise<SubjectResponse[]> => {
  try {
    const res = await axios.get(baseURL + "/subjects");
    return res.data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return [];
  }
};

// GET /subjects/:subject/units
export const getUnits = async (subject: string): Promise<UnitResponse[]> => {
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

// GET tags
export const getAllTags = async (): Promise<string[]> => {
  try {
    const res = await axios.get(`${baseURL}/tags`);
    return res.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};

// GET all questions
export const getAllQuestions = async (): Promise<QuestionType[]> => {
  try {
    const res = await axios.get(baseURL + "/questions");
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

// GET /questions/:id
export const getQuestionById = async (
  id: string
): Promise<QuestionType | null> => {
  try {
    const res = await axios.get(`${baseURL}/questions/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching question:", error);
    return null;
  }
};

// POST /questions
export const createQuestion = async (
  data: QuestionType
): Promise<QuestionType | null> => {
  try {
    const res = await axios.post(`${baseURL}/questions`, data);
    return res.data;
  } catch (error) {
    console.error("Error creating question:", error);
    return null;
  }
};

// PUT /questions/:id
export const updateQuestion = async (
  id: string,
  data: QuestionType
): Promise<QuestionType | null> => {
  try {
    const res = await axios.put(`${baseURL}/questions/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Error updating question:", error);
    return null;
  }
};

// DELETE /questions/:id
export const deleteQuestion = async (id: string): Promise<boolean> => {
  try {
    await axios.delete(`${baseURL}/questions/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting question:", error);
    return false;
  }
};
