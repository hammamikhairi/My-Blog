import { Link } from "react-router-dom";
import "./blogs.sass";

const Blogs = ({blogs}) => {
  return (
    <div className="blogs">

      {blogs && blogs.map( blog =>
        <div className="blog-preview"  key={blog.id}>
          <Link to={`/myblog/blog/${blog.id}`} >
            <div className="blog-img" />
            <h4>{blog.date}</h4>
            <h2>{blog.title}</h2>
            <p>{blog.description} </p>
            <h3>Read More...</h3>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Blogs;
