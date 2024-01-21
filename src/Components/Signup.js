import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../Stylesheets/Signup.scss"

function Signup() {
  const [allValues, setAllValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    retype: ''
  })

  const inputs = [
    {
      input_id: 1,
      name: 'email',
      type: 'text',
      label: 'Email'
    },
    {
      input_id: 2,
      name: 'firstname',
      type: 'text',
      label: 'First Name',
    },
    {
      input_id: 3,
      name: 'lastname',
      type: 'text',
      label: 'Last Name',
    },
    {
      input_id: 4,
      name: 'password',
      type: 'password',
      label: 'Password',
    },
    {
      input_id: 5,
      name: 'retype',
      type: 'password',
      label: 'Re-type Password',
    }
  ]

  const { email, firstname, lastname, password, retype } = allValues

  const onFormChange = (e) => {
    setAllValues({
      ...allValues, 
      [e.target.name]: e.target.value
    })
  }
  
  const handle_click = (e) => {
    console.log('you clicked sign up')
    if (password !== retype) {
      alert('passwords do not match, returning early')
      return
    }
    //call api to create new user
    alert(`calling api to create user with inputs: ${email}, ${firstname}, ${lastname}, ${password}, ${retype}`)
  }
  
  return (
    <div>
        <form className='form'>
          {inputs.map(input => (
            <TextField 
              {...input}
              key={input.input_id}
              style={{'marginTop': '2.5%'}}
              variant='filled'
              value={allValues[input.name]} 
              onChange={onFormChange}
            ></TextField>
          ))}
          <Button variant="contained" onClick={handle_click}>Sign Up</Button>
        </form>
    </div>
  )
}

export default Signup