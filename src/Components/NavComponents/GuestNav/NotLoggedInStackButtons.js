import React from 'react'
import RegistrationButton from './RegistrationButton'
import SignInButton from './SignInButton'
import { Stack } from '@mui/material'
// Style items
import { ThemeProvider } from "@mui/material";
import NavTheme from "../../../Stylesheets/TabsTheme";


const NotLoggedInStackButtons = (display) => {
  return (
    <ThemeProvider theme={NavTheme}>
        <Stack display={display} justifyContent="right" alignItems="center" direction="row" spacing={1} >
            <RegistrationButton />
            <SignInButton />
        </Stack>
    </ThemeProvider>
  )
}

export default NotLoggedInStackButtons