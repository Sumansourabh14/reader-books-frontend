import { Box, Container, Stack } from "@mui/material";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Reader.com</title>
      </Head>

      <Container>
        <Stack sx={{ minHeight: "80vh" }} justifyContent="center">
          <h1 style={{ fontSize: "6rem" }}>
            From a Reader. <br /> For the Readers.
          </h1>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
