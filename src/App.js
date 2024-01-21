import Navbar from './Components/Navbar';
import { ThemeProvider } from '@mui/material';
import NavTheme from './Stylesheets/TabsTheme';
import Signup from './Components/Signup';
import Login from './Components/Login';
function App() {
  return (   
    <div>
      {/* <Navbar/> */}
      <Signup/>
      {/* <Login/> */}
    </div>  
  );
}

export default App;
