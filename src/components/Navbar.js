import { AppBar, Box, Link, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import linkStyles from "../styles/componentLevelCss/Link.module.css";

const Navbar = ({ themeButton }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Reader.com
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box>{themeButton}</Box>

            <Link href="/" className={linkStyles.linkStyles}>
              Home
            </Link>
            <Link href="/dictionary" className={linkStyles.linkStyles}>
              Dictionary
            </Link>
            <Link href="/login" className={linkStyles.linkStyles}>
              Login
            </Link>
            <Link href="/sign-up" className={linkStyles.signUpStyles}>
              Sign Up
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
