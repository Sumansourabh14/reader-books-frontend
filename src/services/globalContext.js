import React, { createContext, useState } from "react";
import { getQuote, getWord, loginApi, signUpApi } from "./globalApi";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);
  const [dictionaryError, setDictionaryError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      setLoading(true);
      const data = await loginApi(email, password);
      console.log(data);
      console.log("Logged in");
      setIsLoggedIn(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoginError(error.response.data.message);
      // setIsLoggedIn(false)
      setLoading(false);
    }
  };

  console.log({ isLoggedIn });

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
        loading,
        login,
        loginError,
        isLoggedIn,
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
