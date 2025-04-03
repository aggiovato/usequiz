export type Question = {
  id: string;
  subject: string;
  unit: string;
  question: string;
  options: Option[];
  answers: string[];
  explanation: string;
  tags: string[];
  difficulty: string;
};

export type Option = {
  id: string;
  text: string;
};
