import React from 'react'
import { Link } from 'react-router-dom';


export default function Button({to, text}) {
  return (
    <Link to={to} className="main-button">{text}</Link>
  )
}
