import axios from "axios";

const baseURL = "http://localhost:3000/api/";

export const getSubjects = async () => {
  try {
    const res = await axios.get(baseURL + "subjects");
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
      baseURL + "subjects/" + encodedSubject + "/units"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching units:", error);
    return [];
  }
};

export const getAllQuestions = async () => {
  try {
    const res = await axios.get(baseURL + "questions");
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export const getQuestionsBySubjectUnit = async (
  subject: string,
  unit: string
) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedUnit = encodeURIComponent(unit);
  try {
    const res = await axios.get(
      baseURL +
        "subjects/" +
        encodedSubject +
        "/units/" +
        encodedUnit +
        "/questions"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
