import React from 'react' ;
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";

// Importing components
import SignIn from './Components/JS/SignIn';
import SignUp from './Components/JS/SignUp';
import Profile from './Components/JS/Profile';
import Courses from './Components/JS/Courses';
import Course from './Components/JS/Course';
import PostCourse from './Components/JS/PostCourse';
import Home from './Components/JS/Home';
import Navbar from './Components/JS/Navbar';
import SavedCourses from './Components/JS/SavedCourses';
import CoursesIpublished from './Components/JS/CoursesIpublished';
import UpdatePassword from './Components/JS/UpdatePassword';

function App() {
  const [navbarState, setnavbarState ] = useState('Profile')
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CoursesIpublished" element={<CoursesIpublished navbarState={navbarState} setnavbarState={setnavbarState}/>} />
          <Route path="/UpdatePassword" element={<UpdatePassword navbarState={navbarState} setnavbarState={setnavbarState}/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Profile" element={<Profile navbarState={navbarState} setnavbarState={setnavbarState}/>} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/SavedCourses" element={<SavedCourses navbarState={navbarState} setnavbarState={setnavbarState}/>} />
          <Route path="/Course" element={<Course/>} />
          <Route path="/PostCourse" element={<PostCourse/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;
