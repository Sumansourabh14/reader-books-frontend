import Head from "next/head";
import React from "react";

const MetaHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaHead;
