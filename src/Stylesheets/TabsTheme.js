import {  createTheme } from '@mui/material/styles';

const NavTheme = createTheme({
        palette: {
          primary: {
            main: '#fab217',
          },
        },
        spacing: (factor) => `${0.25 * factor}rem`,
  });
  
  export default NavTheme;