export type QuestionType = {
  id: string;
  subject: string;
  unit: {
    order: number;
    title: string;
  };
  question: string;
  code?: string;
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

export type LetterType = {
  letter: string[];
  svg: string;
};

export type RouteParamsType = {
  subject?: string;
  unit?: string;
};
