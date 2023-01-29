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

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/Course" element={<Course/>} />
          <Route path="/PostCourse" element={<PostCourse/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;
