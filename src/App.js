import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path='/'></Route>
        <Route path='/Registration'></Route>
        <Route path='/SignIn'></Route>
        <Route path='/Settings'></Route>
        <Route path='/Account'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
