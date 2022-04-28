import { Link } from "react-router-dom";

const Blogs = ({blogs}) => {

  console.log(blogs)

  return (
    <div className="blogs">

      {blogs && blogs.map( blog =>
        <div className="blog-preview"  key={blog.id}>
          <div className="blog-img" />
          <h4>{blog.date}</h4>
          <h2>{blog.title}</h2>
          <p>It is about time for a commit. I wrote some code, I am satisfied with it, and I want to save this state of my project now. Let’s go back to the terminal window and make our first commit. Use the command git status.</p>
          <Link to={`/myblog/blog/${blog.id}`} ><h3>Read More...</h3></Link>
        </div>

      )}
    </div>
  );
}

export default Blogs;
