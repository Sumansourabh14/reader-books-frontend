import { useContext, useState } from "react";
import { GlobalContext } from "../services/globalContext";
import MetaHead from "../components/textComponents/MetaHead";
import { Button, Container, Stack } from "@mui/material";
import TextInput from "../components/formComponents/TextInput";

const SignUpPage = () => {
  const { signUp, signUpError } = useContext(GlobalContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(username, email, password);

    signUp(username, email, password);
  };

  return (
    <>
      <MetaHead title="Sign Up | Reader.com" />
      <Container sx={{ padding: "8rem" }}>
        <Stack spacing={4} alignItems={"center"}>
          <h1>Sign Up</h1>

          {signUpError && <p>{signUpError}</p>}

          <form onSubmit={handleSignUp}>
            <Stack spacing={4} alignItems={"center"} style={{ width: "400px" }}>
              <TextInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required={true}
              />
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
                Sign Up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </>
  );
};

export default SignUpPage;
