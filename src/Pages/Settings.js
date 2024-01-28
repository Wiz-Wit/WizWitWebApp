import React from 'react'
import BasicModal from '../Components/Modal'

import '../Stylesheets/Settings.scss'

const userData = {
    email: 'nerdge@gmail.com',
    firstName: 'andrew',
    lastName: 'tate',
    password: 'proudBeta123'
}

const displayName = {
    'email': 'Email',
    'firstName': 'First Name',
    'lastName': 'Last Name',
    'password': 'Password'
}

function Settings(props) {
  return (
    <>
    <div className='center-div'>
        <h1>Account Info</h1>
        {
        Object.keys(userData).map((attr) => 
            <div>
                {`${displayName[attr.toString()]}`}: 
                    {
                    attr != 'password' ? userData[attr] : '*'.repeat((userData[attr].length))
                    } 
                <BasicModal title={`${displayName[attr.toString()]}`}></BasicModal>
            </div>
        )
        }
    </div>
    </>
  )
}

export default Settings