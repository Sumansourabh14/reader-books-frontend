import { Box, Container, Stack } from "@mui/material";
import Head from "next/head";
import React from "react";
import QuoteAuthor from "../components/quoteComponents/QuoteAuthor";

const Home = () => {
  return (
    <>
      <Head>
        <title>Reader.com</title>
      </Head>

      <Container>
        <Stack spacing={4} sx={{ padding: "2rem 0" }}>
          <Stack sx={{ minHeight: "400px" }} justifyContent="center">
            <h1 style={{ fontSize: "6rem", textAlign: "center" }}>
              From a Reader. <br /> For the Readers.
            </h1>
          </Stack>
          <Box>
            <QuoteAuthor />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
