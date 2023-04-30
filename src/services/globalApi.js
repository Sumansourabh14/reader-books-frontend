import axios from "axios";

// Fetch word meaning from https://dictionaryapi.dev/
export const getWord = async (word) => {
  const data = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  return data;
};
