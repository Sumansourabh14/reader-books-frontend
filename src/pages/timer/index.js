import React, { useEffect, useState } from "react";
import MetaHead from "../../components/textComponents/MetaHead";
import H1 from "../../components/textComponents/H1";
import { Container, Stack } from "@mui/material";

const timerStyles = {
  fontSize: "8rem",
  fontWeight: "bold",
};

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    console.log(seconds);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MetaHead title="Timer" />

      <Container sx={{ padding: "8rem" }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <p style={timerStyles}>{minutes}</p>
          <p style={timerStyles}>:</p>
          <p style={timerStyles}>{seconds}</p>
        </Stack>
      </Container>
    </>
  );
};

export default Timer;
