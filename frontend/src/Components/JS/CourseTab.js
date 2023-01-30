import { Link } from 'react-router-dom';
import React from 'react'


import Teacherpic from '../../images/teacher.jpeg'

export default function CourseTab() {
  return (
    <Link to='/course.js' className='course-tab course-tab-primary'>
        <div className='course-tab-line'></div>
        <div className='course-tab-level-badge'>
            <p>P</p>
        </div>
        <h4 className='course-tab-level-text'>Primary School</h4>
        <h4 className='course-tab-course'>Module | Year</h4>
        <div className='course-tab-teacher'>
            <img src={Teacherpic} alt="teacher" />
            <p>Hamid Marmita</p>
        </div>
        <div className='course-tab-infos'>
            <p className='course-tab-location'>online</p>
            <p className='course-tab-price'>2000DA/Hour</p>
            <p className='course-tab-time'>2-4 Hours/Week</p>
        </div>
    </Link>
  )
}
