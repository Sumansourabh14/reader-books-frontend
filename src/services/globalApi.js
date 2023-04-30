import axios from "axios";

// Fetch word meaning from https://dictionaryapi.dev/
export const getWord = async (word) => {
  const data = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  return data;
};

// Fetch a random quote from an author
export const getQuote = async () => {
  const data = await axios.get(`https://api.quotable.io/random`);

  return data;
};
