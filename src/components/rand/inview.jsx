import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import './cell.sass'



const Cell = () => {

  const { ref, inView } = useInView({
    root: "200px",
    triggerOnce: true
  })
  console.log(inView)

  return (
    <div ref={ref} className="cell-container">
        {inView &&
          <>
            <motion.div
              initial={{y:'10vw', opacity: 0}}
              animate={{y:0, opacity: 1}}
              transition={{type:'spring', duration:1.5}}
            >
            <div className="code-container">
              <p>import numpy as np <br /> print(a)</p>
            </div>
            <div className="output-container">
              <p>a: 15</p>
            </div>
            </motion.div>
          </>
        }
    </div>
  );
}

export default Cell;