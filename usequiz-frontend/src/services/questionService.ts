import axios from "axios";

const baseURL = "http://localhost:3000/api/";

export const getQuestions = async () => {
  try {
    const res = await axios.get(baseURL + "questions");
    return res.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
