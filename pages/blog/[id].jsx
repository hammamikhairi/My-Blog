import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from 'react-loading';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CommentSection from '../../components/Blog/CommentSection/CommentSection';
import GoBack from '../../components/Blog/GoBack/GoBack';
import { Code, Image, Quote, Title } from '../../components/Blog/Lego';
import ReadingProgress from '../../components/Blog/ReadingProgress/ReadingProgress';
import Footer from '../../components/Footer/Footer';


const Article = ({ article}) =>
  <>
    {
      article.split("$$").filter(bit => bit !== "\n" && bit !== "\n\n").map( (bit, index) => {
        if (bit.includes("!link")) return  <ReactMarkdown  key={index} linkTarget="_blank" children={bit.replace("!link", "")} className='link'  />
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

// server side props
export async function getServerSideProps(context) {

   const id = context.params.id;
   const preview = id.includes("PREVIEW-");

  return {
    props: {
      id: context.params.id,
      preview: preview
    }
  }
}

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const preview = id.includes("PREVIEW-");
  const [blog, setBlog] = useState(null);

   const [watcher, setWatcher] = useState();

   useEffect(() => {
      setWatcher(window.innerWidth >= 1100);
   }, [])

  useEffect(() => {
    fetch("https://bapi.khairi.dev/blog/" + id.replace('PREVIEW-', '')).then(res => res.json()).then(data => {setBlog(data)})
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
    <>

      <Head>
         <title>0xkhairi | {blog.title}</title>
      </Head>

      <div className='container'>
        { watcher  && <ReadingProgress />}
        <header className="blog__header">
          <GoBack />
          <Title title={blog.title} date={blog.date} long={blog.long} ready={blog.ready} />
        </header>

        { (blog.ready || preview) &&
          <>
            <div className="blog">
              <div className="blog__content">
                <Article title={blog.title} banner={blog.banner} article = {blog.article} />
              </div>
            </div>
            <div className="blog_comment_section">
               <CommentSection />
            </div>
          </>
        }
      </div>
      {
        (blog.ready || preview) ?
        <Footer mode="Written" />
        :
        <div className='blog__footer'>
          <Footer mode="Will be written" />
        </div>
      }
    </>
  )
}

export default Blog;