import React from "react"
import { Link } from "gatsby"
import { PersonalImage } from "./index"
import '../pages/blogPageStyle.css';

export const BlogHeader = ({ onArticle }) => {
  return (
    <div className={'navigation-container'}>
      <PersonalImage />
      <div className={'navigation-link-container'}>
        { onArticle ? <Link to="/blog" >Back to blog</Link> : <Link to="/" >Home</Link>}
        <a target="_blank" href="https://twitter.com/EnsarBavrk/">Twitter</a>
        <a target="_blank" href="https://www.instagram.com/ensar.bavrk/">Instagram</a>
      </div>
      <hr className={'navigation-separator'}/>
    </div>
  );
}