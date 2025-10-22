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
       <li><a href="#Home" >Home</a></li>
       <li><a href="#skill">Skill</a></li>
       <li><a href="#project">Project</a></li>
       <li><a href="#footer">Contact</a></li>
	   <li tabIndex="0"> < TogglesDarkmodeAndLightmode/> </li>
      </ul> 
     </div>
   </nav>
  )
}

export default Navbar;