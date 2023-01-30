import React from 'react'

// importing components
import Button from './Button'

export default function YouAreTeacher() {
  return (
    <div className='youareteacher-container'>
      <h2>Are you a teacher</h2>
      <p>Create an account and start posting your courses  for free</p>
      <Button to='SignUp' text="Create Account"/>
    </div>
  )
}
