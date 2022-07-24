import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import './footer.sass';

const Footer = ({ mode }) => {
  return (
    <div className='footer__container'>
      <hr />
      <div className='footer'>
        <div className="with__love">
          <p>{ mode } with ❤️ by Khairi</p>
        </div>
        <div className="links">
          <FaLinkedinIn onClick={ () => {
            window.open("https://www.linkedin.com/in/khairihammami/")
          }} />
          <BsGithub onClick={ () => {
            window.open("https://github.com/hammamikhairi")
          }} />
        </div>
      </div>
    </div>
   );
}

export default Footer;