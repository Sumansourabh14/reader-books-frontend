import { Button, Container, Stack, TextField } from "@mui/material";
import Head from "next/head";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../services/globalContext";
import TextInput from "../components/formComponents/TextInput";
import { MetaHead } from "../components/textComponents/MetaHead";

const Login = () => {
  const { login, loginError } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(email, password);
    login(email, password);
  };

  return (
    <>
      <MetaHead title="Login | Reader.com" />

      <Container sx={{ padding: "8rem" }}>
        <Stack spacing={4} alignItems={"center"}>
          <h1>Login</h1>

          {loginError && <p>{loginError}</p>}

          <form onSubmit={submitHandler}>
            <Stack spacing={4} alignItems={"center"} style={{ width: "400px" }}>
              <TextInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required={true}
              />
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required={true}
              />
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
