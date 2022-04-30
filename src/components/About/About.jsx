import {motion} from 'framer-motion'
import './about.sass'

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
            <motion.h2 className='intro'
              initial={{y:'10vh', opacity:0, }}
              animate={{y:0, opacity:1}}
              transition={{duration:1}}
            >
              Many student want to learn new technologies and get confused with wich course to take or which youtube channel to follow. And some end up reading some book from 2016 (defenitly not me) which are usually out-dated. <br /> That is why i decided to start Learni which will contain interactive courses (hopefully) and i'll try my best to keep it up-to-date
            </motion.h2>
        </div>
      </div>

  );
}

export default About;