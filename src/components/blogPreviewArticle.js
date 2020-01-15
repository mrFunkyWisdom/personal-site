import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import '../pages/blogPageStyle.css';

export const BlogPreviewArticle = ({title, featuredImage, date, tags, slug, excerpt }) => {
  return (
    <div className={'article-preview-container'}>
      {featuredImage &&
      <div className={'article-preview-img-container'}>
        <Img fluid={featuredImage}/>
      </div>
      }
      <Link to={slug}>
        <div className={'article-preview-text-container'}>
          <div className={'article-preview-tags-container'}>
            {tags && tags.map(tag => (
              <p className={'article-preview-tag'}>#{tag.toUpperCase()}</p>
            ))}
          </div>
          <h1 style={{ color: '#fff'}}>{title}</h1>
          <p>{excerpt}</p>
          <p className={'article-preview-date'}>{date}</p>
        </div>
      </Link>
    </div>
  )
}