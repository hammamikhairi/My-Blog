import { Link } from "react-router-dom";
import "./navbar.sass";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from "react";

const Navbar = () => {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    console.log("dark :", isDarkMode);
    let bod = document.getElementsByTagName("body")[0];
    bod.classList.toggle("light-body")
    bod.classList.toggle("dark-body")
  }



  return (
    <div id="navbar" className="navbar-container"  >
      <div className="navbar">
        <div className="logo">
          <Link to="/myblog"><h1 id="logo">Khairi Hammami</h1></Link>
        </div>
        <ul className="links">
          <Link to="/myblog/cv"><li className="link">CV</li></Link>
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

export default Navbar;