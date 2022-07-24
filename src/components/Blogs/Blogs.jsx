import { useState } from "react";
import Loading from "react-loading";
import useFetch from "../Hooks/useFetch";
import BlogCard from "./BlogCard";
import "./blogs.sass";

import "./blogs.sass";

const BlogsNavbar = () => {
  return (
      <div className="blogs-navbar">
        <ul>
          <li>All</li>
          <li>Articles</li>
          <li>Tutorial</li>
          <li>News</li>
          <li>UI Design</li>
          <li>UX Design</li>
        </ul>
      </div>
  );
}


const Blogs = ({blogs}) => {
  return (
    <div className="blogs">
      {
        blogs  &&
        blogs.map( (blog, index) => <BlogCard key ={index} blog ={blog} index ={index} />)
      }
    </div>
  )
}

const DaBlog = () => {

  const [temp, setTemp] = useState(false);
  const { data, isPending, error } = useFetch("https://myblog.hammamikhairi.repl.co/blogs")

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
      setTemp(true);
    } else {
      setTemp(false);
    }
  })

  return (
    <div className="blogs-container">
      {/* <BlogsNavbar /> */}
      <div>
        {error? <h1>Error!</h1> : null}
        {isPending ? <><Loading type="bubbles" color="#73737D" height={'50px'} width={'50px'} /><span style={{ opacity : 0}}>invisible</span></> : <Blogs blogs={data} /> }

      </div>
    </div>
  );
}

export default DaBlog;
