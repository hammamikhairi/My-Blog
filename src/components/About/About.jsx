import { motion } from 'framer-motion';
import './about.sass';

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
            <motion.h2 className='intro'
              initial={{y:'10vh', opacity:0, }}
              animate={{y:0, opacity:1}}
              transition={{duration:1}}
            >
              My Blooog
            </motion.h2>
        </div>
      </div>

  );
}

export default About;