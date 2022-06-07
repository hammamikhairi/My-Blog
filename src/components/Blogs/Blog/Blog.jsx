import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './blog.sass';

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("https://myblog.hammamikhairi.repl.co/blog/" + id).then(res => res.json()).then(data => {setBlog(data);console.log(data)})
  }, [id])

  return (
    <div className="blog-container">
      {blog && 
        <div className="blog">
          <p>{blog.title}</p>
          {/* <p>{blog.description}</p>
          <p>{blog.author}</p>
          <p>{blog.text}</p> */}
        </div>

      }
    </div>
  )

  // return <Markdown>{md}</Markdown>
}

export default Blog;