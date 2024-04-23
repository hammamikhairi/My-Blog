import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import uuseCopy from '../Hooks/Copy';
import useWaitForElm from '../Hooks/useWaitForElm';



const Footer = ({ mode }) => {

  const [shouldLoad, setShouldLoad] = useState(false);
  useWaitForElm('.container').then(() => {setShouldLoad(true)});

  return (
    <div className='footer__container'>
      {
        shouldLoad &&
        <>
          { window.innerWidth < 768 && window.location.href.includes('/blog/') &&
            <div className='swipe'>
              <p>swipe right to go back</p>
            </div>
          }
          <hr />
          <div className='footer'>
            <div className="with__love">
              <p>{ mode } with ❤️ by Khairi</p>
            </div>
            <div className="links">
              <MdEmail onClick={ () => {
                uuseCopy({ icon: <MdEmail /> ,message:'khairihammami@outlook.com', mode:'Email'});
              }} />
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