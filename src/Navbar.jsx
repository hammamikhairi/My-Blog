import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/myblog"><h1 id="logo">Earnest</h1></Link>
      </div>
      <ul className="links">
        <Link to="/myblog/portifolio"><li className="link">PORTFOLIO</li></Link>
        <Link to="/myblog/cv"><li className="link">CV</li></Link>
        <Link to="/myblog/about"><li className="link">ABOUT ME</li></Link>
        <Link to="/myblog/contact"><li className="link">ABOUT ME</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;