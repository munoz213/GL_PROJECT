import { Link } from 'react-router-dom';
import React from 'react'
import '../CSS/App.css'

// importing components
import CourseTab from "./CourseTab"

export default function PopularCourses() {
  return (
    <div className='popular-courses-container'>
        <div className="popular-courses-text">
            <h3>Our most popular courses</h3>
            <Link to='/courses.js' className='link'>See all</Link>
        </div>
        <div className="popular-courses-list">
            <ul>
                <li><CourseTab/></li>
                <li><CourseTab/></li>
                <li><CourseTab/></li>
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
