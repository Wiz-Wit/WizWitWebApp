import Navbar from './Components/Navbar';
import { ThemeProvider } from '@mui/material';
import NavTheme from './Stylesheets/TabsTheme';
import CardList  from './Components/CardList';


function App() {
  return (   
    <div>
      <Navbar/>
      <CardList></CardList>
    </div>  
  );
}

export default App;
