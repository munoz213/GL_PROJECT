import '../CSS/Home.css'

// Importing components
import HomeTop from './HomeTop'
import PopularCourses from './PopularCourses'
import YouAreTeacher from './YouAreTeacher'
import Footer from './Footer'

// Code
export default function Home() {
  
  return (
    <div className='home-container'>
      <HomeTop/>
      <PopularCourses/>
      <YouAreTeacher/>
      <Footer/>
    </div>
  )
}
