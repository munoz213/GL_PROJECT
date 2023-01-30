import React from 'react'
import '../CSS/Profile.css'
import frame from '../../images/frame-profil.png'
import pic from '../../images/pic.png'
import { useEffect } from 'react'

// importing components
import Sidebar from './Sidebar'

export default function Profile({navbarState, setnavbarState}) {
  useEffect(()=>{
    setnavbarState('profile')
  },[])
  return (
    <div className='profile-container'>
      <Sidebar navbarState={navbarState}/>
      <div className="profile-elements">
        <div class="frame"> 
          <div className='content'>
            <img src={pic} class="pic" />
            <div className='content-text'>
              <h2>Yousra Bouhanna</h2>
              <h3>y_bouhanna@estin.dz</h3>
            </div>
          </div>
        </div>
        
        <div className='informations'>
          <form>
            <div className='info'>
              <label htmlFor="First Name">First Name</label>
              <input type="text" name='First Name' placeholder='Yousra'/>
            </div>
            <div className='info'>
              <label htmlFor="Last Name">Last Name</label>
              <input type="text" name='Last Name' placeholder='Bouhanna'/>
            </div>
            <div className='info'>
              <label htmlFor="Email">Email</label>
              <input type="text" name='Email' placeholder='y_bouhanna@estin.dz'/>
            </div>
            <div className='info'>
              <label htmlFor="Phone Number">Phone Number</label>
              <input type="text" name='Phone Number' placeholder='0557896521'/>
            </div>
            <button className="SaveButton" type='Save'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
