import Head from "next/head";
import React from "react";

export const MetaHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
