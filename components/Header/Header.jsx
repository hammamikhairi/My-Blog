import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeaderSVG from "../SVGs/header";

const Header = () => {


  const [watcher, setWatcher] = useState(false);
  useEffect(() => {

    setWatcher(window.innerWidth <= 970)
    window.scrollTo(0, 0);

  }, []);


  return (
      <div className="header-container"
      >
        <motion.div
        initial={{
          x: watcher ? 0:  '-10vw',
          y: watcher ?'-10vh' :  0,
          opacity: 0
        }}
        animate={{
          x:0,
          y:0,
          opacity: 1
        }}
        transition={{type:'spring', duration:1.5}} className="header-description"
        >
          <h1>Welcome !</h1>
          {/* <h3>Is this it ?? </h3> */}
          <h3>For students and developers looking to join me in my journey in the world of "modern" technology.</h3>
          {/* <p>Just another student trying to make sense out of his life.</p> */}
        </motion.div>
        <motion.div className="illustration-container"
        initial={{
          x: watcher ? 0:  '10vw',
          y: watcher ?'-10vh' :  0,
          opacity: 0
        }}
        animate={{
          x:0,
          y:0,
          opacity: 1
        }}
        transition={{type:'spring', duration:1.5}}>
          {/* <img src={headerIllustration} alt="logo" className="illustration" /> */}
          <HeaderSVG className="illustration" />
        </motion.div>
      </div>
  );
}

export default Header;