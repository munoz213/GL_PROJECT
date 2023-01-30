import "../CSS/SignIn.css";
import React from 'react';
import { Link } from 'react-router-dom';


// importing components
import SignInForm from './SignInForm'

// Code
export default function SignIn() {
  return (
    <div className="signin-container">
        <div className="signin-content">
          <Link className="signin-homeBtn" to='/'>iTeach</Link>
          <SignInForm />
        </div>
    </div>
  )
}
