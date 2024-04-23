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
      </Head>


      <Component {...pageProps} />

  </>
}