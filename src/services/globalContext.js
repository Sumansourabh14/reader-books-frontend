import React, { createContext, useState } from "react";
import { getWord } from "./globalApi";

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

  return (
    <GlobalContext.Provider value={{ fetchWordMeaning, dictionaryError }}>
      {children}
    </GlobalContext.Provider>
  );
};
