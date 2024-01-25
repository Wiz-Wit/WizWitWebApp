import React from 'react'
import Button from '@mui/material/Button';
// Style items
import { ThemeProvider } from "@mui/material";
import NavTheme from "../../../Stylesheets/TabsTheme";

const SignInButton = () => {
  return (
    <ThemeProvider theme={NavTheme}>
      <Button href='/SignIn' sx={{ color: "primary.textColor"}}>Sign In</Button>
    </ThemeProvider>
  )
}

export default SignInButton