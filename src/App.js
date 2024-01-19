import Navbar from './Components/Navbar';
import { ThemeProvider } from '@mui/material';
import NavTheme from './Stylesheets/TabsTheme';
import MultiActionAreaCard from './Components/MultiActionAreaCard';
function App() {
  return (   
    <div>
      <Navbar/>

      <MultiActionAreaCard />
      <MultiActionAreaCard />

      <MultiActionAreaCard />
      <MultiActionAreaCard />
      <MultiActionAreaCard />

    </div>  
  
   );
}

export default App;
