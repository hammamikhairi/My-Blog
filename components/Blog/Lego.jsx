import { useEffect, useState } from 'react';
import Gist from "styled-react-gist";

export const Title = ({title, date, long, ready}) => {
  return (
    <div className="title__container">
      <h1 className="title">{title}</h1>
      <div className="title__underline">
        <h4>{date} { ready && '·'} { ready && long }</h4>
      </div>
    </div>
  )
}

export const Image = ({image}) => {

  let link = image.slice(
    image.indexOf('(') + 1,
    image.lastIndexOf(')'),
  );


  if ( image.includes("full") ){

    return (
      <div className="image__container">
        <img className="blog__image" src={link} alt='failed' />
      </div>
    )
  }

  if ( image.includes("tiny") )
    return (
      <div className="image__container tiny">
        <img className="blog__image" src={link} alt='failed' />
      </div>
    )

  if ( image.includes("svg") ){
    return (
      <div className="image__container">
        <Svg link ={link} />
      </div>
    )
  }

  return (
    <div className="image__container">
      <div className="img blog__image" style={{  backgroundImage: `url(${link})`}} ></div>
    </div>
   );
}

export const Quote = ({quote}) => {
  let text = quote.replace( /!>/g, "")
  return (
    <div className="quote__container">
      <div className="quote">
        {text}
      </div>
    </div>
  )
}

export const Code = ({gistId, file}) => {
  const strip = string => string.replace(/^\s+|\s+$/g, '')

  return (
    <div className="gist">
      <Gist
        file = {strip(file)}
        gistId = {gistId}
        styleSheetUrl= 'https://bapi.khairi.dev/css/gist.css'
      />
    </div>
  )
}

const Svg = ({link}) => {
  const [svg, setSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  useEffect(() => {
    fetch(link)
      .then(res => res.text())
      .then(setSvg) 
      .catch(setIsErrored)
      .then(() => setIsLoaded(true))
  }, [link]);

  if (isErrored) return <div>SVG Error</div>;
  return (
      <div
          className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${isErrored ? 'svgInline--errored' : ''}`}
          dangerouslySetInnerHTML={{ __html: svg }}
      />
  );
}

// .gist{font-size:13px;line-height:18px;width:53em}
// .gist pre{font-family:Menlo,Monaco,'Bitstream Vera Sans Mono','Courier New',monospace !important}
// .gist-meta{font-family:Arial,sans-serif;font-size:13px !important}
// .gist-meta a{color:#3b5998 !important;font-weight:bold;text-decoration:none}
// .gist-meta a:hover{text-decoration:underline}