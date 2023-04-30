import { Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

const Word = () => {
  const router = useRouter();

  console.log(router);

  return (
    <Container>
      <Stack sx={{ padding: "6rem 0 1rem 0" }}>
        <h1>Word</h1>
      </Stack>
    </Container>
  );
};

export default Word;
