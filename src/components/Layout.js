import {
  Container,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Tooltip,
  createTheme,
} from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { darkTheme } from "../theme/DarkTheme";
import { lightTheme } from "../theme/LightTheme";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  const switchTheme = (
    <Tooltip
      title={
        darkMode ? `Change theme to light mode` : `Change theme to dark mode`
      }
      arrow
    >
      <IconButton onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar themeButton={switchTheme} />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
