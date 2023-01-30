import React from 'react'

// importing components
import Button from './Button'


export default function HomeTop() {
  return (
    <div className='hometop-container'>
        <div className='hometop-welcome'>
            <div className="hometop-welcome-left">
                <h5>100% free and for everyone</h5>
                <h1>Book your next classes from the comfort of your home</h1>
                <p>Browse and post about the courses you want to take or you want to teach</p>
                <Button to='Courses' text="Go to courses"/>
            </div>
            <div className='hometop-image'></div>
        </div>
        <div className="hometop-numbers">
            <div className="hometop-number number-courses">
                <h3>300+</h3>
                <p>Available Courses</p>
            </div>
            <div className="numbers-between"></div>
            <div className="hometop-number number-users">
                <h3>24,000+</h3>
                <p>Active Users</p>
            </div>
            <div className="numbers-between"></div>
            <div className="hometop-number number-teachers">
                <h3>150+</h3>
                <p>Active Teachers</p>
            </div>
        </div>
      
    </div>
  )
}
