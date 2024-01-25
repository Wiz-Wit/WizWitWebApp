import * as React from 'react';
import Navbar from './Components/Navbar';
import { ThemeProvider } from '@mui/material';
import NavTheme from './Stylesheets/TabsTheme';
import CardList  from './Components/CardList';
import MuiCarousel from './Components/Carousel'
//import Carousel from './Components/bsCarousel';
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  return (   
    <div>
      <Navbar/>
      {/* <Carousel /> */}
      <MuiCarousel />
      <CardList></CardList>
      
     </div>
  );
}

export default App;
