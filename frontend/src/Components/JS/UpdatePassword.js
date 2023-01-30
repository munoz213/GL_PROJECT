import React from 'react'
import '../CSS/UpdatePassword.css'
import { useEffect } from 'react'

//Importing components 
import Sidebar from './Sidebar'


export default function UpdatePassword({navbarState, setnavbarState}) {
  useEffect(()=>{
    setnavbarState('update')
  },[])
  return (
    <div className='updatepassword-container'>
      <Sidebar navbarState={navbarState}/>
      <div className='updatepassword-elements'>
        <div className='change'>
          <h2>Update your password</h2>
        </div>
        <div className='informationss'>
          <form>
            <div className='info'>
            <label htmlFor="Current password">Current password</label>
            <input type="text" name='Current password' placeholder='Enter current password'/>
            </div>
            <div className='info'>
            <label htmlFor="New password">New password</label>
            <input type="text" name='New password' placeholder='Enter new password'/>
            </div>
            <div className='info'>
            <label htmlFor="New password">New password</label>
            <input type="text" name='New password' placeholder='Re-enter new password'/>
            </div>
            <button className="SaveButton" type='Save'>Save</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}
