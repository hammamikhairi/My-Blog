import { useEffect, useState } from "react";
import { BiLink } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import uuseCopy from "../Hooks/Copy";
import "./navbar.sass";


const NavbarPhantom = () => <div  id="phantom"></div>

const MainNavbar = () => {

  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('isDarkMode') === "true");
    if (localStorage.getItem('isDarkMode') === "true") {
      toggleDarkMode();
    }
  },[])


  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
    let bod = document.getElementsByTagName("body")[0];
    bod.classList.toggle("light-body")
    bod.classList.toggle("dark-body")
    let docStyle = document.documentElement.style
    docStyle.getPropertyValue('--grey') === "#fff" ? docStyle.setProperty('--grey', '#424242') : docStyle.setProperty('--grey', '#fff')
    docStyle.getPropertyValue('--title-color') === "#fff" ? docStyle.setProperty('--title-color', '#000') : docStyle.setProperty('--title-color', '#fff')
    docStyle.getPropertyValue('--notification-background') === "rgb(17, 18, 22)" ? docStyle.setProperty('--notification-background', '#f7f7f7') : docStyle.setProperty('--notification-background', 'rgb(17, 18, 22)')
  }

  return (
    <div id="navbar" className="navbar-container"  >
      <div className="navbar">
        <div className="logo">
          <Link to="/"><h1 id="logo" onClick={ () => { window.scrollTo(0, 0) }}>Khairi Hammami</h1></Link>
        </div>
        <ul className="links">
          <BiLink className="bilink" onClick={ () => { uuseCopy({ message:"https://khairihammami.tech/", mode:"Link" }) }}/>
          <DarkModeSwitch
            style={{ marginBottom: '0px' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={25}
          />
        </ul>
      </div>
    </div>
  );
}

const Navbar = () =>
  <>
    <MainNavbar />
    <NavbarPhantom />
  </>

  export default Navbar