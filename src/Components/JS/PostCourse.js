import React from 'react';
import "../CSS/PostCourse.css"
import { Link } from 'react-router-dom';


export default function PostCourse() {
  return (
    <div className='postcourse-container'>
      <h1>Post a course</h1>
        <form action="" id='postcourse-form'>
          <div className="postcourse-form-maindiv level-of-study-div">
            <p>Level of study</p>
            <div className='postcourse-form-radio-group'>
              <div className='postcourse-form-radio'>
                <input type="radio" id='primarySchool' name="levelOfStudy" value="Primary School"/>
                <label htmlFor="primarySchool">Primary School</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='middleSchool' name="levelOfStudy" value="Middle School"/>
                <label htmlFor="middleSchool">Middle School</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='highSchool' name="levelOfStudy" value="High School"/>
                <label htmlFor="highSchool">High School</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='university' name="levelOfStudy" value="University"/>
                <label htmlFor="university">University</label><br/>
              </div>
            </div>
          </div>
          <div className="postcourse-form-maindiv year-of-study-div">
            <p>Year of study</p>
            <div className='postcourse-form-radio-group'>
              <div className='postcourse-form-radio'>
                <input type="radio" id='year1' name="yearOfStudy" value="1"/>
                <label htmlFor="year1">1</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='year2' name="yearOfStudy" value="2"/>
                <label htmlFor="year2">2</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='year3' name="yearOfStudy" value="3"/>
                <label htmlFor="year3">3</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='year4' name="yearOfStudy" value="4"/>
                <label htmlFor="year4">4</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='year5' name="yearOfStudy" value="5"/>
                <label htmlFor="year5">5</label><br/>
              </div>
            </div>
          </div>
          <div className="postcourse-form-maindiv module-div">
            <p>Module</p>
            <select Name="Name_of_list_box" className='postcourse-modules'>  
              <option>-Select a module-</option>  
              <option>Maths</option>  
              <option>Phisics</option>
            </select> 
          </div>
          <div className="postcourse-form-maindiv onlineoffline-div">
            <p>Online / Offline</p>
            <div className='postcourse-form-radio-group'>
              <div className='postcourse-form-radio'>
                <input type="radio" id='online' name="onlineoffline" value="Online"/>
                <label htmlFor="online">Online</label><br/>
              </div>
              <div className='postcourse-form-radio'>
                <input type="radio" id='offline' name="onlineoffline" value="Offline"/>
                <label htmlFor="offline">Offline</label><br/>
              </div>
            </div>
          </div>
          <div className="postcourse-form-maindiv location-div">
            <p>Location</p>
            <input type="text"  placeholder='Enter the location of your course' className='postcourse-input'/>
          </div>
          <div className="postcourse-form-maindiv price-div">
            <p>Price / Hour</p>
            <input type="text"  placeholder='Enter the price/hour in DA' className='postcourse-input'/>
          </div>
          <div className="postcourse-form-maindiv minhourse-div">
            <p>Min hours/Week</p>
            <input type="text"  placeholder='Enter min hours/week' className='postcourse-input'/>
          </div>
          <div className="postcourse-form-maindiv maxhours-div">
            <p>Max hours/Week</p>
            <input type="text"  placeholder='Enter max hours/week' className='postcourse-input'/>
          </div>
          <div className="postcourse-form-maindiv coursedescription-div">
            <p>Course Description</p>
            <textarea className="postcourse-description" placeholder='Enter a description for your course' ></textarea>
          </div>
        </form>
        <div className='postcourse-buttons'>
          <button type='submit' form='postcourse-form' className='postcourse-submitButton'>Publish the course</button>
          <Link className="postcourse-cancelButton" to='/'>Cancel</Link>
        </div>
    </div>
  )
}
