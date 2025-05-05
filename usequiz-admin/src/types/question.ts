// src/types/question.ts
export type Option = {
  id: string;
  text: string;
};

export type QuestionType = {
  id?: string;
  subject: string;
  unit: { order: number; title: string };
  question: string;
  code?: string;
  options: Option[];
  answers: string[];
  explanation: string;
  tags: string[];
  difficulty: "easy" | "medium" | "hard";
};
