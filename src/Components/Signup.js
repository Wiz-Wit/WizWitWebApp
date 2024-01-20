import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "../Stylesheets/Signup.scss"

function Signup() {
  const [allValues, setAllValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  })

  const { email, firstname, lastname, password } = allValues

  const onFormChange = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value
    })
  }
  
  const handle_click = (e) => {
    console.log('you clicked sign up')
    //call api to create new user
    alert(`${email}, ${firstname}, ${lastname}, ${password}`)
  }
  
  return (
    <div>
        <form className='form'>
          <TextField 
           name='email' 
           id="filled-basic" 
           label="Email" 
           variant="filled" 
           value={email}
           onChange={onFormChange}
          /><br/>
          <TextField 
           name='firstname' 
           id="filled-basic" 
           label="First Name" 
           variant="filled"
           value={firstname}
           onChange={onFormChange}
          /><br/>
          <TextField 
           name='lastname' 
           id="filled-basic" 
           label="Last Name" 
           variant="filled" 
           value={lastname}
           onChange={onFormChange}
          /><br/>
          <TextField 
           name='password' 
           id="filled-basic" 
           label="Password" 
           variant="filled"
           type='password'
           value={password}
           onChange={onFormChange}
          /><br/>

          <Button variant="contained" onClick={handle_click}>Sign Up</Button>
        </form>
    </div>
  )
}

export default Signup