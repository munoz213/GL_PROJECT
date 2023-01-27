import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/SignUp.css'

export default function SignUpForm() {
  return (
    <form className="signup-signupForm">
      <h3>Welcome to iTeach!👋</h3>
      <h2>Start by creating your account</h2>
      <div className='signup-holder'>
        <div className="signup-formLeft">
          <label htmlFor="first name">First name</label>
          <input type="text" name="first name" placeholder='Enter your first name'/>
          <label htmlFor="email">Enter your email</label>
          <input type="text" name="email" placeholder='enter your email'/>
          <label htmlFor="password">Enter your password</label>
          <input type="password" name="password" placeholder='enter your password'/>
        </div>
        <div className="signup-formRight">
          <label htmlFor="last name">Last name</label>
          <input type="text" name="last name" placeholder='Enter your last name'/>
          <label htmlFor="Phone number">Phone number</label>
          <input type="text" name="phone number" placeholder='enter your phone number'/>
          <label htmlFor="re-password">Re-enter password</label>
          <input type="password" name="re-password" placeholder='Re-enter your password'/>
        </div>
      </div>
      
      
      <button className="signup-submitButton" type='submit'>Create account</button>
      <p>Already have an account <Link className="signup.signinLink" to="../SignIn">Sign in</Link></p>
    </form>
  )
}
