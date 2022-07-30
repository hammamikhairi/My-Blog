import { useEffect, useState } from 'react';
import Loading from 'react-loading';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import './blog.sass';
import CommentSection from './CommentSection/CommentSection';
import GoBack from './GoBack/GoBack';
import { Code, Image, Quote, Title } from './Lego';
import ReadingProgress from './ReadingProgress/ReadingProgress';

const Article = ({ article}) =>
  <>
    {
      article.split("$$").filter(bit => bit !== "\n" && bit !== "\n\n").map( (bit, index) => {
        if (bit.includes("!link")) return  <ReactMarkdown  key={index} children={bit.replace("!link", "")} className='link'  />
        if (bit.includes("!br")) return <br key={index} />
        if (bit.includes("!image")) return <Image key={index} image={bit} />
        if (bit.includes("!>")) return <Quote key={index} quote= {bit} />
        if (bit.includes("!gist")) return <Code key ={index} gistId={bit.split('/')[1]} file={bit.split('/')[2]} />
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
  // window.scrollTo(0, 0);
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  let watcher = window.innerWidth >= 1100;

  useEffect(() => {
    fetch("https://pleasedont.hammamikhairi.repl.co/blog/" + id).then(res => res.json()).then(data => {setBlog(data)})
  }, [id])


  if(!blog) {
    return (
      <div className="loader__container">
        <Loading type="bubbles" color="#73737D" height={'10%'} width={'10%'} />
      </div>
    )
  }

  if (blog) document.title = blog.title;
  return (

    <div className='container'>
      { watcher  && <ReadingProgress />}
      <header className="blog__header">
        <GoBack />
        <Title title={blog.title} date={blog.date} long={blog.long} ready={blog.ready} />
      </header>
      { blog.ready &&
        <>
          <div className="blog">
            <div className="blog__content">
              <Article title={blog.title} banner={blog.banner} article = {blog.article} />
            </div>
          </div>
          <CommentSection />
        </>
      }
    </div>
  )
}

export default Blog;