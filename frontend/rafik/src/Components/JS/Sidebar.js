import React from 'react'
import { Link } from 'react-router-dom'

import '../CSS/Sidebar.css'

export default function Sidebar({navbarState}) {
  var profileclass = '';
  var updateclass = '';
  var savedclass = '';
  var publishedclass = '';
  console.log(navbarState);
  switch(navbarState) {
    case 'saved':{
      profileclass = ''
      updateclass = ''
      savedclass = 'sidebar-active'
      publishedclass = ''
      break
    }
    case 'published':{
      profileclass = ''
      updateclass = ''
      savedclass = ''
      publishedclass = 'sidebar-active'
      break
    }
    case 'profile':{
      profileclass = 'sidebar-active'
      updateclass = ''
      savedclass = ''
      publishedclass = ''
      break
    }
    case 'update':{
      profileclass = ''
      updateclass = 'sidebar-active'
      savedclass = ''
      publishedclass = ''
      break
    }
    
  }


  return (
    <nav className='sidebar'>
      <ul className='sidebar-items'>
        <li className={profileclass}>
          <div className='sidebar-violet'></div>
          <Link to='/Profile' className='sidebar-link'>My profile</Link>
        </li>
        <li className={updateclass}>
          <div className='sidebar-violet'></div>
          <Link to='/UpdatePassword' className='sidebar-link'>Update Password</Link>
        </li>
        <li className={savedclass}>
          <div className='sidebar-violet'></div>
          <Link to='/SavedCourses' className='sidebar-link'>Saved Courses</Link>
        </li>
        <li className={publishedclass}>
          <div className='sidebar-violet'></div>
          <Link to='/CoursesIpublished' className='sidebar-link'>Courses I published</Link>
        </li>
      </ul>
    </nav>
  )
}
