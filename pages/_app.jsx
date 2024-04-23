import Head from 'next/head';
import { useEffect } from 'react';
import "../styles/about.sass";
import "../styles/blog.sass";
import "../styles/blogs.sass";
import '../styles/footer.sass';
import '../styles/globals.sass';
import '../styles/globals.scss';
import '../styles/header.sass';
import '../styles/navbar.sass';


export default function App({ Component, pageProps }) {

  useEffect(() => {

    if (window.innerWidth < 768) {

      let touchstartX = 0
      let touchendX = 0

      document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
      })

      document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        if (window.location.href.includes('/blog/'))
          if (touchendX - touchstartX > (window.screen.width / 3))
            window.open('https://khairi.dev/', '_self' )
      })
    }


  }, []);

  return <>

      <Head>
        <link rel="icon" href="/favicon.svg" />
        {/* add some meta data */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="khairi hammami" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Khairi's Blog (?)" />
        <meta name="description" content="Please end me" />
        <meta name="keywords" content="khairi, khairi hammami, blog, programming, coding, flayes" />

        {/* <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap"
            rel="stylesheet"
          /> */}
      </Head>

      <Component {...pageProps} />

  </>
}