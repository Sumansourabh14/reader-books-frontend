import React, { createContext, useState } from "react";
import { getQuote, getWord, loginApi, signUpApi } from "./globalApi";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loginError, setLoginError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);
  const [dictionaryError, setDictionaryError] = useState(null);

  const signUp = async (username, email, password) => {
    setSignUpError(null);

    try {
      const data = await signUpApi(username, email, password);
      console.log(data);
      console.log("Signed up!");
    } catch (error) {
      console.log(error);
      setSignUpError(error.response.data.message);
    }
  };

  const login = async (email, password) => {
    setLoginError(null);

    try {
      const data = await loginApi(email, password);
      console.log(data);
      console.log("Logged in");
    } catch (error) {
      console.log(error);
      setLoginError(error.response.data.message);
    }
  };

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
        login,
        loginError,
        signUp,
        signUpError,
        fetchWordMeaning,
        dictionaryError,
        fetchRandomQuote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
