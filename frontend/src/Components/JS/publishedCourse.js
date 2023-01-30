import React from 'react'
import '../CSS/CoursesIpublished.css'

export default function publishedCourse() {
  return (
    <>
    <div className='publishedCourse'>
            <div className='module-line'></div>
            <div className='module-level-badge'>
                <p>P</p>
            </div>
            <h4 className='module-course'>Module | Year</h4>
            <div className='module-infos'>
                <p className='module-date'>Published on the 18th october 2022</p>
            </div>
    </div>
      
    </>
  )
}
