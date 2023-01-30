import React from 'react'
import '../CSS/CoursesIpublished.css'
import { useEffect } from 'react'

import Sidebar from './Sidebar'
import publishedCourse from './publishedCourse'

export default function CoursesIpublished({navbarState, setnavbarState}) {
  useEffect(()=>{
    setnavbarState('published')
  },[])
  return (
    <div className='coursesipublished-container'>
      <Sidebar navbarState={navbarState}/>
      <div className="coursesipublished-elements">
        <h2>Courses you published</h2>
        <div className="published-courses-list">
          <ul>
            <li><publishedCourse/></li>
            <li><publishedCourse/></li>
            <li><publishedCourse/></li>
            <li><publishedCourse/></li>
            <li><publishedCourse/></li>
            <li><publishedCourse/></li>
            <li><publishedCourse/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
