import React, { createContext, useState } from "react";
import { getQuote, getWord } from "./globalApi";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [dictionaryError, setDictionaryError] = useState(null);

  const fetchWordMeaning = async (word) => {
    setDictionaryError(null); // Any old error message is cleared before making a new request

    try {
      const data = await getWord(word);
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);

      if (error?.response?.status === 404) {
        setDictionaryError("Word could not be found :(");
      }
    }
  };

  const fetchRandomQuote = async () => {
    try {
      const data = await getQuote();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        fetchWordMeaning,
        dictionaryError,
        fetchRandomQuote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
