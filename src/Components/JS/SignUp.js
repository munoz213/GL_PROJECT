import "../CSS/SignUp.css"
import React from 'react';
import { Link } from 'react-router-dom';

// importing components
import SignUpForm from "./SignUpForm"

export default function SignUp() {


  return (
    <div className="signup-container">
        <div className="signup-content">
          <Link className="signup-homeBtn" to='/'>iTeach</Link>
          <SignUpForm />
        </div>
    </div>
  )
}
