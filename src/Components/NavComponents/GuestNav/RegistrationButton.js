import React from 'react'
import Button from '@mui/material/Button';
// Style items
import { ThemeProvider } from "@mui/material";
import NavTheme from "../../../Stylesheets/TabsTheme";

const RegistrationButton = () => {

  const registerAccount = () => {
    
  }
  return (
    <ThemeProvider theme={NavTheme}>
      <Button href='/Registration' onClick={registerAccount} sx={{ color: "primary.textColor"}}>Register</Button>
    </ThemeProvider>
        
  )
}

export default RegistrationButton