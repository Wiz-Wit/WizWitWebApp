import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardList  from './Components/CardComponents/CardList';
import BsCarousel from './Components/bsCarousel';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import './index.css';
import MainCard from './Components/CardComponents/MainCard';

const App = () => {
  return (
    <div style={{background: ""}}>
         <BsCarousel/>
         <MainCard />
        <CardList/>
    </div>
      
  )
}

export default App
