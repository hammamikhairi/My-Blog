import { useEffect, useState } from 'react';
import Loading from 'react-loading';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import './blog.sass';
import { Image, Quote, Title } from './Lego';



const Article = ({ article}) =>
  <>
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


  if(!blog)
    return (
      <div className="loader__container">
        <Loading type="bubbles" color="#73737D" height={'10%'} width={'10%'} />
      </div>
    )

  return (
    <>
      <header className="blog__header">
        <Title title={blog.title} date={blog.date} long={blog.long} />
        <div className="banner__container">
          <img className="banner__img" src={blog.banner} alt='deez' />
        </div>
      </header>
      <div className="blog">
        <div className="blog__content">
          <Article title={blog.title} banner={blog.banner} article = {blog.article} />
        </div>
      </div>
    </>
  )
}

export default Blog;