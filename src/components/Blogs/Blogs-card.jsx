import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./blogs.sass";

const Blogs = ({blogs}) => {
  return (
    <div  className="blogs">
        {blogs && blogs.map( blog =>
          <motion.div
          initial={{y:'-10vh', opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{type:'spring', duration:1.5, delay:0.5 * blog.id}}
          className="blog-preview"
          key={blog.id}
          >
            <Link to={`/myblog/blog/${blog.id}`} >
              {/* <div className="blog-img" style={{backgroundImage: `url(${blog.banner})`}} /> */}
              <h2>{blog.title}</h2>
              <p>{blog.description} </p>
              <h4>{blog.date} · {blog.long}</h4>
            </Link>
          </motion.div>
        )}
      </div>
  );
}

export default Blogs;
