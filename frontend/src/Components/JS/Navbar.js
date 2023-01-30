import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import '../CSS/App.css';


// Importing components
import Button from './Button'
import SearchInput from './SearchInput'
import HamburgerMenu from './HamburgerMenu'
import profilePicture from '../../images/profilepicture.jpeg'


// Code
export default function Navbar() {
  const [hamburgerState, setHamburgerState] = useState('hamburgerClosed')

  const openHamburgerHandler= ()=>{
    setHamburgerState("hamburgerOpened")
  }
  return (
    <>
      <HamburgerMenu hamburgerState={hamburgerState} setHamburgerState={setHamburgerState}/>
      <nav className="nav ">
        <Link to='/' className="logo">iTeach</Link>
        <SearchInput requestedBy="Nav"/>
        <ul className='nav-not-active'>
            <li><Link to='SignIn' className='link'>Log in</Link></li>
            <li><Button to='SignUp' text="Create Account"/></li>
        </ul>
        <ul className="nav-active">
            <li><Button to='PostCourse' text="Post a course"/></li>
            <li className='profile-picture'><Link to='Profile'><img src={profilePicture} alt="profile"  className="picture"/></Link></li>
        </ul>
        <svg className="hamburgerBtn hamburgerBtnNavWhite"  onClick={openHamburgerHandler} width="35" height="18" viewBox="0 0 35 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2C12.5 1.17157 13.1716 0.5 14 0.5H33C33.8284 0.5 34.5 1.17157 34.5 2C34.5 2.82843 33.8284 3.5 33 3.5L14 3.5C13.1716 3.5 12.5 2.82843 12.5 2ZM0.5 9C0.5 8.17157 1.17157 7.5 2 7.5L33 7.5C33.8284 7.5 34.5 8.17158 34.5 9C34.5 9.82843 33.8284 10.5 33 10.5L2 10.5C1.17157 10.5 0.5 9.82843 0.5 9ZM19 14.5C18.1716 14.5 17.5 15.1716 17.5 16C17.5 16.8284 18.1716 17.5 19 17.5H33C33.8284 17.5 34.5 16.8284 34.5 16C34.5 15.1716 33.8284 14.5 33 14.5L19 14.5Z" fill="white"/>
        </svg>

      </nav>
    </>
  )
}
