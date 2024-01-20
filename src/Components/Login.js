import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

import "../Stylesheets/Login.scss"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handle_click = (e) => {
    console.log('you clicked log in')
    //call api to verify user match
    alert(`${email}, ${password}`)
  }

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value)
//   }

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value)
//   }
  
  return (
    <div>
        <form className='form'>
            <TextField 
             id="filled-basic" 
             label="Email" 
             variant="filled" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <TextField 
             id="filled-basic" 
             label="Password" 
             variant="filled" 
             type="password" 
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <Button variant="contained" onClick={handle_click}>Log In</Button>
        </form>
    </div>
  )
}

export default Login