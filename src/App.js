import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardList  from './Components/CardList';
import MuiCarousel from './Components/Carousel'
import Signup from './Components/Signup';
import Login from './Components/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <MuiCarousel />
      <CardList/>
      <Routes>
        <Route exact path='/'></Route>
        <Route path='/Registration'><Signup/></Route>
        <Route path='/SignIn'><Login/></Route>
        <Route path='/Settings'></Route>
        <Route path='/Account'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
