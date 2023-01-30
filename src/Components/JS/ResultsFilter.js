import React from 'react'

export default function ResultsFilter({filtersState, setFiltersState}) {
  const closeFiltersHandler= ()=>{
    setFiltersState("closed")
  }
  return (
    <div className={`resultsfilter-container resultsfilter-container-${filtersState}`}>
      <div className='close-btn' onClick={closeFiltersHandler}>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7929 0.292894C21.1834 -0.0976306 21.8166 -0.0976306 22.2071 0.292894C22.5976 0.683418 22.5976 1.31658 22.2071 1.70711L12.6642 11.25L22.2071 20.7929C22.5976 21.1834 22.5976 21.8166 22.2071 22.2071C21.8166 22.5976 21.1834 22.5976 20.7929 22.2071L11.25 12.6642L1.70711 22.2071C1.31658 22.5976 0.683418 22.5976 0.292892 22.2071C-0.0976315 21.8166 -0.0976315 21.1834 0.292892 20.7929L9.83579 11.25L0.292894 1.70711C-0.0976306 1.31658 -0.0976306 0.683418 0.292894 0.292894C0.683418 -0.0976306 1.31658 -0.0976306 1.70711 0.292894L11.25 9.83579L20.7929 0.292894Z" fill="#949494"/>
        </svg>
      </div>
      <h2>Filters</h2>
      <form id='filter-form'>
        <p>Level of study</p>
        <div className='filter-form-radio-group'>
          <div className='filter-form-radio'>
            <input type="radio" id='primarySchool' name="levelOfStudy" value="Primary School"/>
            <label htmlFor="primarySchool">Primary School</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='middleSchool' name="levelOfStudy" value="Middle School"/>
            <label htmlFor="middleSchool">Middle School</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='highSchool' name="levelOfStudy" value="High School"/>
            <label htmlFor="highSchool">High School</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='university' name="levelOfStudy" value="University"/>
            <label htmlFor="university">University</label><br/>
          </div>
        </div>
        <p>Year of Study</p>
        <div className='filter-form-radio-group'>
          <div className='filter-form-radio'>
            <input type="radio" id='year1' name="yearOfStudy" value="1"/>
            <label htmlFor="year1">1</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='year2' name="yearOfStudy" value="2"/>
            <label htmlFor="year2">2</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='year3' name="yearOfStudy" value="3"/>
            <label htmlFor="year3">3</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='year4' name="yearOfStudy" value="4"/>
            <label htmlFor="year4">4</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='year5' name="yearOfStudy" value="5"/>
            <label htmlFor="year5">5</label><br/>
          </div>
        </div>
        <p>Module</p>
        <select Name="Name_of_list_box" className='filter-modules'>  
          <option>-Select a module-</option>  
          <option>Maths</option>  
          <option>Phisics</option>
        </select> 
        <p>Online / Offline</p>
        <div className='filter-form-radio-group'>
          <div className='filter-form-radio'>
            <input type="radio" id='online' name="onlineoffline" value="Online"/>
            <label htmlFor="online">Online</label><br/>
          </div>
          <div className='filter-form-radio'>
            <input type="radio" id='offline' name="onlineoffline" value="Offline"/>
            <label htmlFor="offline">Offline</label><br/>
          </div>
        </div>
        <p>Min price/Hour</p>
        <input type="text"  placeholder='Enter minimum price/hour (DA)' className='filter-input'/>
        <p>Max price/Hour</p>
        <input type="text"  placeholder='Enter maximum price/hour (DA)' className='filter-input'/>
      </form>
      <button form='filter-form' className="filter-submitButton" type='submit'>Filter Courses</button>
  </div>
  )
}
