import './header.sass';

const Header = () => {
  return (
      <div className="header-container">
        <div className="header-description">
          <h1>A Blog!</h1>
          <h3>I think so...</h3>
          <p>Just another student trying to make sense out of his life.</p>
        </div>
        <div className="illustration-container">
          <div className="illustration"></div>
        </div>
      </div>
  );
}

export default Header;