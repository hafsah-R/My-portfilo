import { RxHamburgerMenu } from 'react-icons/rx';
import { useState} from 'react';
import { IconContext } from "react-icons";
import TogglesDarkmodeAndLightmode from './TogglesDarkmodeAndLightmode.js';

//small device Navbar
const Navbar = () => {
 const [showNavbar, setShowNavbar] = useState(false)
 const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
 }
 return (
   <nav>
    <div className="menu-icon" onClick={handleShowNavbar}>
	 <IconContext.Provider value={{className:"react-icons"}}>
      <RxHamburgerMenu />
	  </IconContext.Provider>
     </div>
     <div className={`nav-elements  ${showNavbar && 'active'}`}>
      <ul>
       <a href="#Home" ><li>Home</li></a>
       <a href="#skill"><li>Skill</li></a>
       <a href="#project"><li>Project</li></a>
       <a href="#footer"><li>Contact</li></a>
	   <li tabIndex="0"> < TogglesDarkmodeAndLightmode/> </li>
      </ul> 
     </div>
   </nav>
  )
}

export default Navbar;