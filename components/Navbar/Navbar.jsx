import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLink } from 'react-icons/bi';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import uuseCopy from "../Hooks/Copy";

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
    docStyle.getPropertyValue('--dark-scroll') === "rgba(60 61 64)" ? docStyle.setProperty('--dark-scroll', 'rgb(160 160 162)') : docStyle.setProperty('--dark-scroll', 'rgba(60 61 64)')
    docStyle.getPropertyValue('--light-scroll') === "rgb(160 160 162)" ? docStyle.setProperty('--light-scroll', 'rgba(60 61 64)') : docStyle.setProperty('--light-scroll', 'rgb(160 160 162)')
  }

  return (
    <div id="navbar" className="navbar-container"  >
      <div className="navbar">
        <div className="logo">
          <Link href="/"><h1 id="logo" onClick={ () => { window.scrollTo(0, 0) }}>Khairi Hammami</h1></Link>
        </div>
        <ul className="links">
          <BiLink className="bilink" onClick={ () => {
            const id = window.location.href || document.URL
            let message = "https://khairi.dev/"

            if (id.includes("/blog/")) {
              message += "#" +  id.split("#").at(-1)
            }

            uuseCopy({ icon: <BiLink />, message: message, mode:"Link" })
          }}/>
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