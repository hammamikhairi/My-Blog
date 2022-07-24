import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import useWaitForElm from '../Hooks/useWaitForElm';
import './footer.sass';


const Footer = ({ mode }) => {

  const [shouldLoad, setShouldLoad] = useState(false);
  useWaitForElm('.container').then(() => {setShouldLoad(true)});

  return (
    <div className='footer__container'>
      {
        shouldLoad &&
        <>
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
        </>
      }
    </div>
   );
}

export default Footer;