import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import reportWebVitals from './reportWebVitals';
import { IconContext } from "react-icons";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { useState ,useEffect} from 'react';

j
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
	   <li tabindex="0"> <TogglesDarkmodeAndLightmode/> </li>
      </ul> 
     </div>
   </nav>
  )
}


function TogglesDarkmodeAndLightmode() {
 const [icon,setIcon]=useState(false);
 const toggleIcon =() => {setIcon((prev)=>!prev)}
 
 const defaultDark = window.matchMedia("(prefers-color-scheme: light)").matches;
 const [theme, setTheme] = useState(defaultDark);
 const switchTheme = () => {
  const newTheme = theme === "dark" ?  "light" :"dark" ;
   setTheme(newTheme);
 }
 useEffect(() => {
  document.body.setAttribute("data-theme", theme);
  }, [theme]);
  
 return (
  <button aria-label="Darkmod and lightmode button" onkeydown={() => {switchTheme(); toggleIcon();}}>
  { icon?(<MdLightMode title="lightmode"/>) : (<MdDarkMode title="Darkmode"/>) }
  </button>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
<div>

<header>
<Navbar />
</header>

<main>
<section id="Home" >
<h4>Im Hafsah Rizg FrontEnd Devloper</h4>
<div><img src="squier.svg" alt="squier img"/></div>
</section>

<article id="skill">
<h4>My Skill</h4>
<div>
<ul>
<li>Java Script</li>
<li>React</li>
<li>CSS</li>
<li>SCSS</li>
<li>Git</li>
</ul>
</div>

<div>
<ul>
<h5>Language</h5>
<li>Arabic</li>
<li>Engish</li>
</ul>
</div>
</article>


<div className="project" id="project">
<h4>Project</h4>

<div className="projectParantContainer">
 <div className="projectContainer">
  <img src="online tutoring.png" alt="online tutoring"/>
  <div className="overlay">
   <a href="https://online-tutoring-home-page.vercel.app">
   HTML-SCSS-JS home page online tutoring website
   </a> 
 </div>
</div>

<div className="projectContainer">
 <img src="screenshot landin page.png" alt="landin page"/>
 <div className="overlay">
  <a href="https://github.com/hafsah-R/landing-page">
  HTML-CSS-JS landing page
  </a>
 </div>
</div>

<div className="projectContainer">
 <img src="التقديم لمؤسسات التعليم العالي.png" alt="التقديم لمؤسسات التعليم العالي"/>
 <div className="overlay">
  <a href="https://application-for-higer-education-institutions.vercel.app/index.html">
  HTML-SCSS-JS application to sudan higher education institution
  </a>
 </div>
</div>

<div className="projectContainer">
 <img src="pricing.png" alt="interactive pricing componen"/>
 <div className="overlay">
  <a href="https://interactive-pricing-componen.vercel.app/">
  HTML-SASS-ReactJS Interactive pricing component
  </a>
 </div>
</div>

<div className="projectContainer">
 <img src="randomQoute.png" alt="random qoute machine"/>
 <div className="overlay">
  <a href="http://random-qoute-machine.vercel.app/">
  HTML-SCSS-JS random-qoute-machine
  </a>
 </div>
</div>

 </div>
</div>

</main>


<footer id="footer">
<div>
<IconContext.Provider value={{className:"react-icons"}}>
<a href="https://x.com/hafsah_rizg" aria-label="X link"><BsTwitterX title="x"/></a>
<a href="https://github.com/hafsah-R" aria-label="github link"><BsGithub title="Github"/></a>
<a href="https://sa.linkedin.com/in/hafsah-rizg-3143a1200" aria-label="linkedin link" ><BsLinkedin title="likedin"/></a>
</ IconContext.Provider>
</div>
</footer>

</div>
);

reportWebVitals();
