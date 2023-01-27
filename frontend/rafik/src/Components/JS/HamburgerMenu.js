import { Link } from 'react-router-dom';
import CreateAccount from '../../images/create-account.png'
import '../CSS/App.css';


// Import compnents
import SearchInput from './SearchInput'
import Button from './Button'



export default function HamburgerMenu({hamburgerState, setHamburgerState}) {
  const closehamburgerHandler= ()=> {
    setHamburgerState("hamburger-closed")
  }

  return (
    <div className={`hamburgerMenu hamburgerMenuNavWhite ${hamburgerState}`}>
      <SearchInput requestedBy="Hamburger"/>
      <div className="connected">
        <ul>
        <li><Link to='/' className="link">• Home</Link></li>
        <li><Link to='Profile' className="link">My profile</Link></li>
        <li><Link to='Profile' className="link">Update Password</Link></li>
        <li><Link to='Profile' className="link">Saved Courses</Link></li>
        <li><Link to='Profile' className="link">Courses I Published</Link></li>
        </ul>
        <Button to='PostCourse' text="Post a course"/>
      </div>
      <div className="notConnected">
        <img src={CreateAccount} alt="create account" />
        <Button to='SignUp' text="Create Account"/>
        <Link to='SignIn' className="link">Log in</Link>
      </div>
      <svg className="NavWhitecloseHamburger" onClick={closehamburgerHandler} width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.7929 0.292894C21.1834 -0.0976306 21.8166 -0.0976306 22.2071 0.292894C22.5976 0.683418 22.5976 1.31658 22.2071 1.70711L12.6642 11.25L22.2071 20.7929C22.5976 21.1834 22.5976 21.8166 22.2071 22.2071C21.8166 22.5976 21.1834 22.5976 20.7929 22.2071L11.25 12.6642L1.70711 22.2071C1.31658 22.5976 0.683418 22.5976 0.292892 22.2071C-0.0976315 21.8166 -0.0976315 21.1834 0.292892 20.7929L9.83579 11.25L0.292894 1.70711C-0.0976306 1.31658 -0.0976306 0.683418 0.292894 0.292894C0.683418 -0.0976306 1.31658 -0.0976306 1.70711 0.292894L11.25 9.83579L20.7929 0.292894Z" fill="white"/>
      </svg>
      
    </div>
  )
}
