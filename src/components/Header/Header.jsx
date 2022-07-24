import { motion } from "framer-motion";
import headerIllustration from "../../images/1-01.png";
import "./header.sass";

const Header = () => {
  let watcher = window.innerWidth <= 970;
  console.log(watcher);
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
          <h1>A Blog!</h1>
          <h3>Is this it ?? </h3>
          <p>Just another student trying to make sense out of his life.</p>
        </motion.div>
        <motion.div className="illustration-container"
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
        transition={{type:'spring', duration:1.5}}>
          <img src={headerIllustration} alt="logo" className="illustration" />
        </motion.div>
      </div>
  );
}

export default Header;