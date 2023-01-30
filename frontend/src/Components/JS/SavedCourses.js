import React from 'react'
import { useEffect } from 'react'

// importing components
import '../CSS/SavedCourses.css'
import Sidebar from './Sidebar'
import CourseTab from './CourseTab'

export default function SavedCourses({navbarState, setnavbarState}) {
  useEffect(()=>{
    setnavbarState('saved')
  },[])
  return (
    <div className='savedcourses-container'>
      <Sidebar navbarState={navbarState}/>
      <div className='savedcourses-elements'>
        <h2>Courses you saved 💜 </h2>
        <ul className="savedcourses-list">
            <li><CourseTab/></li>
            <li><CourseTab/></li>
            <li><CourseTab/></li>
            <li><CourseTab/></li>
            <li><CourseTab/></li>
        </ul>
      </div> 
    </div>
  )
}
