import React from "react";
import Layout from "../components/Layout";
import { GlobalContextProvider } from "../services/globalContext";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
};

export default MyApp;
