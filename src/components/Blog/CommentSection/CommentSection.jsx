import Giscus from '@giscus/react';


const CommentSection = () =>
    <Giscus
      repo="hammamikhairi/myblog"
      repo-id="R_kgDOHQG1rA"
      category="Comments"
      category-id="DIC_kwDOHQG1rM4CQbyN"
      mapping="url"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme= 'https://pleasedont.hammamikhairi.repl.co/css/styles.css'
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
    />


export default CommentSection;











// import React, { Component } from "react";
// import './commentSection.sass';

// export default class Comments extends Component {
//   constructor(props){
//     super(props);
//     this.commentBox = React.createRef();
//   }
//   componentDidMount () {
//       const id = window.location.href || document.URL
//       // let scriptEl = document.createElement("script");
//       // scriptEl.setAttribute("src", "https://utteranc.es/client.js");
//       // scriptEl.setAttribute( "theme", "github-light");
//       // scriptEl.setAttribute("crossorigin","anonymous");
//       // scriptEl.setAttribute("repo", "hammamikhairi/myblog");
//       // scriptEl.setAttribute("async", true);
//       // scriptEl.setAttribute("issue-term", id.split("/#/blog/").at(-1));
//       // this.commentBox.current.appendChild(scriptEl);


//       let scriptEl = document.createElement("script");
//       scriptEl.setAttribute("src", "https://giscus.app/client.js");
//       scriptEl.setAttribute("repo", "hammamikhairi/myblog");
//       scriptEl.setAttribute("repo-id", "R_kgDOHQG1rA");
//       scriptEl.setAttribute("category","Comments");
//       scriptEl.setAttribute("category-id","DIC_kwDOHQG1rM4CQbyN");
//       scriptEl.setAttribute("mapping", "url");
//       scriptEl.setAttribute("strict", "0");
//       scriptEl.setAttribute("reactions-enabled", "1");
//       scriptEl.setAttribute("emit-metadata","0");
//       scriptEl.setAttribute("input-position","top");
//       scriptEl.setAttribute("theme","light");
//       scriptEl.setAttribute("lang","en");
//       scriptEl.setAttribute("loading","lazy");
//       scriptEl.setAttribute("crossorigin","anonymous");
//       scriptEl.setAttribute("async", true);
//       // scriptEl.setAttribute("issue-term", id.split("/#/blog/").at(-1));
//       this.commentBox.current.appendChild(scriptEl);

//   }

//   render() {
//     return (
//         <div>
//           <div ref={this.commentBox} className="comment-box"/>
//         </div>
//     );
//   }
// }