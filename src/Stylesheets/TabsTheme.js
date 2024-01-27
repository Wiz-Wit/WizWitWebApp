import {  createTheme } from '@mui/material/styles';

const NavTheme = createTheme({
        palette: {
          primary: {
            main: '#ffffff',
            textColor: '#15e2e6',
            background: '#000000',
            white: '#ffffff'
          },
        },
        spacing: (factor) => `${0.25 * factor}rem`,
  });
  
  export default NavTheme;