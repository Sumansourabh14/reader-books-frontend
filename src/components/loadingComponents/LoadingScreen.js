import { Stack } from "@mui/material";
import React from "react";

const LoadingScreen = () => {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ border: "1px solid blue", height: "100vh" }}
      >
        <p style={{ color: "red" }}>Loading ...</p>
      </Stack>
    </>
  );
};

export default LoadingScreen;
