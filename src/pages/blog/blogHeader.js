import React from "react"
import { PersonalImage } from "../../components"
import { Link } from "gatsby"
import './blogPageStyle.css';

export const BlogHeader = ({ onArticle }) => {
  return (
    <div className={'navigation-container'}>
      <PersonalImage />
      <div className={'navigation-link-container'}>
        { onArticle ? <Link to="/blog" >Back to blog</Link> : <Link to="/" >Home</Link>}
        {/*<a href={'#'}>Speaking</a>*/}
        <a href="https://twitter.com/EnsarBavrk/">Twitter</a>
        <a href="https://www.instagram.com/ensar.bavrk/">Instagram</a>
      </div>
      <hr className={'navigation-separator'}/>
    </div>
  );
}