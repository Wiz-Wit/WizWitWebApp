import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardList  from './Components/CardComponents/CardList';
import BsCarousel from './Components/bsCarousel';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
const App = () => {
  return (
    <div>
        <BsCarousel/>
        <CardList/>
    </div>
      
  )
}

export default App
