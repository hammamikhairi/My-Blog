import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import './blog.sass';
import { Image, Quote } from './Lego';



const Article = ({title, article}) =>
  <>
    <h1>{title}</h1>
    {
      article.split("$$").filter(bit => bit !== "\n" && bit !== "\n\n").map( (bit, index) => {
        if (bit.includes("br")) return <br key={index} />
        if (bit.includes("image")) return <Image key={index} image={bit} />
        if (bit.includes(">")) return <Quote key={index} quote= {bit} />
        return (
          <ReactMarkdown
            key={index}
            children={bit}
            remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
          />
        )
      })
    }
  </>

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("https://myblog.hammamikhairi.repl.co/blog/" + id).then(res => res.json()).then(data => {setBlog(data);console.log(data)})
  }, [id])


  if(!blog) return <div>Loading...</div>
  return (
    <>
      <div className="blog">
        <div className="blog__content">
          <Article title={blog.title} article = {blog.article} /> 
        </div>
      </div>
    </>
  )
}

export default Blog;