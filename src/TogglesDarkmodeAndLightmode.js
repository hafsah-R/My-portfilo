import { useState ,useEffect} from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

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
  <button aria-label="Darkmod and lightmode button" onClick={() => {switchTheme(); toggleIcon();}}>
  { icon?(<MdLightMode title="lightmode"/>) : (<MdDarkMode title="Darkmode"/>) }
  </button>
  );
}

export default TogglesDarkmodeAndLightmode;