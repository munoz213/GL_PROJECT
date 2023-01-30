import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/SignIn.css"



export default function SignInForm() {
  return (
    <form className="signin-signInForm">
      <h3>Welcome back!👋</h3>
      <h2>Sign in to your account</h2>
      <label htmlFor="email">Email</label>
      <input type="text" name='email' placeholder='example@email.com'/>
      <label htmlFor="password">Password</label>
      <input type="password" name='password' placeholder='enter your password'/>
      <Link to="../ForgotPassword" className="signin-forgotPassword">Forgot your password?</Link>
      <button className="signin-submitButton" type='submit'>Continue</button>
      <p>Don't have an account? <Link className="signin-signupLink" to="../SignUp">Sign up</Link></p>
    </form>
  )
}
