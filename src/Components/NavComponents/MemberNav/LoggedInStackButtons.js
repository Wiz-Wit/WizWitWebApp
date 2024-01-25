import React from 'react'
import { Stack } from '@mui/material'

// Style items
import { ThemeProvider } from "@mui/material";
import NavTheme from "../../../Stylesheets/TabsTheme";
import MemberButtonMenu from './MemberButtonMenu';

const LoggedInStackbuttons = (display) => {
  return (
    <ThemeProvider theme={NavTheme}>
        <Stack display={display} justifyContent="right" alignItems="center" direction="row" spacing={1} >
          <MemberButtonMenu />
        </Stack>
    </ThemeProvider>
  )
}

export default LoggedInStackbuttons