export const Image = ({image}) => {

  let link = image.slice(
    image.indexOf('(') + 1,
    image.lastIndexOf(')'),
  );
  console.log(link)


  if ( image.includes("full") ) return (
    <div className="image__container">
      <img className="blog__image" src={link} alt='deez' />
    </div>
  )



  return (
    <div className="image__container">
      <div className="img blog__image" style={{  backgroundImage: `url(${link})`}} ></div>
    </div>
   );
}

export const Quote = ({quote}) => {
  let text = quote.replace( />/g, "")
  return (
    <div className="quote__container">
      <div className="quote">
        {text}
      </div>
    </div>
  )
}