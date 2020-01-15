import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Footer } from "../components"
import { BlogHeader } from "../components/blogHeader"
import { graphql, Link, } from "gatsby"
import '../components/layout.css';

const BlogArticle = (props) => {
  const { frontmatter: data, body} = props.data.mdx
  console.log('DATA ',data);
  return (
    <Layout style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}} Footer={Footer}>
      <SEO title={data.title} />
      <BlogHeader onArticle />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div className={'article-heading'}>
         <div style={{  display: "flex", flexDirection: "row", alignItems: 'center'}}>
            {data.tags && data.tags.map(tag => (
              <p className={'article-preview-tag'}>#{tag.toUpperCase()}</p>
            ))}
         </div>
          <p className={'article-preview-tag-separator'}>/</p>
          <p className={'article-preview-tag'}>{`Published on ${data.date}`}</p>
        </div>
        <h1 style={{ color: '#fff'}}>{data.title}</h1>
        {data.featuredImage &&
        <div className={'article-img-container'}>
          <Img fluid={data.featuredImage.childImageSharp.fluid}/>
        </div>
        }
        <MDXRenderer>{body}</MDXRenderer>
        <Link to="/blog" style={{ color: '#00A7DC'}} >Read more</Link>
      </div>
    </Layout>
  )
}

export const querry = graphql`
      query Slug($path: String!) {
         mdx(fields: { slug: { eq:$path }}) {
          frontmatter {
                tags
                title
                date(formatString: "MMMM Do, YYYY")
                featuredImage {
                  childImageSharp {
                    fluid(
                      maxWidth: 900
                      traceSVG: { background: "#000", color: "#23e5a5" }
                    ) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
          body
        }
      }
  `

export default BlogArticle;