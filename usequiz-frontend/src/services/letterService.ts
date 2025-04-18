import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASEURL as string;

export const getLetters = async () => {
  try {
    const res = await axios.get(baseURL + "letters");
    return res.data;
  } catch (error) {
    console.error("Error fetching letters:", error);
    return [];
  }
};

export const getLetter = async (letter: string) => {
  try {
    const res = await axios.get(baseURL + "alphabet/" + letter);
    return res.data;
  } catch (error) {
    console.error("Error fetching letter:", error);
    return [];
  }
};
