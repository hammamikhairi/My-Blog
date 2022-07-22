import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import "./blogs.sass";

const BlogCard = ({blog, index}) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })
  // let delayRatio = window.innerWidth <= 970 ? 0 : (index % 2)

  return (
    <div
    className="card-wrapper"
    ref = {ref}
    >
    {
      inView &&
      <motion.div
      initial={{y:'-10vh', opacity: 0}}
      animate={{y:0, opacity: 1}}
      transition={{
        type:'spring',
        duration:1.5,
        // delay: 0.5 * delayRatio
      }}
      className="blog-preview"
      key={blog.id}
      >
        <Link to={`/blog/${blog.id}`} >
          <div className="blog-img" style={{backgroundImage: `url(${blog.banner})`}} />
          <h2>{blog.title}</h2>
          <p>{blog.description} </p>
          <h4>{blog.date} · {blog.long}</h4>
        </Link>
      </motion.div>
    }
    </div>
  )

}

export default BlogCard;
