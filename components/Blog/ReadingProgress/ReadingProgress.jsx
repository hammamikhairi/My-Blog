import { useEffect, useRef, useState } from 'react';


const ReadingProgress = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const  ref  = useRef();
  let opacity = 0
  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setReadingProgress(percent);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  if (readingProgress < 80) {
    opacity = readingProgress / 20;
  } else {
    opacity = (100 - readingProgress) / 20
  }

  // return <div className={`reading-progress-bar`} style={{height: `${readingProgress}%` }} />
  return (
    <div className="progressBar__container">
      <div className="progressBar__background"
      style={{ opacity: opacity }}
      >
        <div ref={ref} className="progressBar"
          style={{height: `${readingProgress}%`}}
        ></div>
      </div>
    </div>
  )
};

export default ReadingProgress;