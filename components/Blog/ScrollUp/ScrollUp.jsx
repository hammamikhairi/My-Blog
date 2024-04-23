import { motion } from 'framer-motion';
import { AiOutlineUp } from 'react-icons/ai';

export const ScrollUp = () => {
  return (
    <>
    {window.innerWidth > 768 &&
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{
        duration:1,
      }}
      whileHover={{
        scale: 1.5,
        transition: { duration:  1 },
      }}

      onClick={() => window.scrollTo(0, 0)}
      className="scroll__container"
      >
          <AiOutlineUp />
      </motion.div>
    }
    </>
  )
}
