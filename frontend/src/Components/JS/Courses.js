import React from 'react';
import '../CSS/Courses.css'
import { useState } from 'react'

// Importing components
import CourseTab from './CourseTab'
import YouAreTeacher from './YouAreTeacher'
import Footer from './Footer'
import ResultsFilter from './ResultsFilter'


export default function Courses() {
const [filtersState, setFiltersState] = useState('closed')

const openFiltersHandler= ()=>{
  setFiltersState("open")
}
  return (
    <div className='courses-container'>
      <ResultsFilter filtersState={filtersState} setFiltersState={setFiltersState}/>
      <div className="courses-results">
        <div className="text">
          <h3>Showing results for "maths"</h3>
          <p onClick={openFiltersHandler}>Filter results</p>
        </div>
        <div className="coursestabs-container">
          <ul>
            <li><CourseTab/></li>
            <li><CourseTab/></li>
            <li><CourseTab/></li>
            <li><CourseTab/></li>
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
      <YouAreTeacher/>
      <Footer/>
    </div>
  )
}
