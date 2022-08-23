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
  console.log(link)


  if ( image.includes("full") ){

    return (
      <div className="image__container">
        <img className="blog__image" src={link} alt='failed' />
      </div>
    )
  }

  if ( image.includes("tiny") )
    return (
      <div className="image__container">
        <img className="blog__image tiny" src={link} alt='failed' />
      </div>
    )


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
    <Gist
      className='gist'
      file = {strip(file)}
      gistId = {gistId}
      styleSheetUrl= 'https://pleasedont.hammamikhairi.repl.co/css/gist.css'
    />
  )
}

// .gist{font-size:13px;line-height:18px;width:53em}
// .gist pre{font-family:Menlo,Monaco,'Bitstream Vera Sans Mono','Courier New',monospace !important}
// .gist-meta{font-family:Arial,sans-serif;font-size:13px !important}
// .gist-meta a{color:#3b5998 !important;font-weight:bold;text-decoration:none}
// .gist-meta a:hover{text-decoration:underline}