import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { PersonalImage } from "../../components"
import { graphql, Link, useStaticQuery } from "gatsby"
import './blogPageStyle.css';
import Img from "gatsby-image"

export const BlogPage = () => {
  const {allMdx: { articles }} = useStaticQuery(graphql`{
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
          ) {
           articles: nodes {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                tags
                title
                date(formatString: "MMMM Do, YYYY")
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 900) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
      }
  `);

  console.log('HERE ', articles);

  return(
    <Layout>
      <SEO title="Blog" />

      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: 80}}>
        <PersonalImage />
        <div className={'navigation-container'}>
          <Link to="/" >Home</Link>
          {/*<a href={'#'}>Speaking</a>*/}
          <a href="https://twitter.com/EnsarBavrk/">Twitter</a>
          <a href="https://www.instagram.com/ensar.bavrk/">Instagram</a>
        </div>
      </div>
      { articles.map(data => (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10}}>
          {data.frontmatter.featuredImage &&
          <div style={{
            minWidth: 320,
            height: 'auto',
          }}>
            <Img fluid={data.frontmatter.featuredImage.childImageSharp.fluid }/>
          </div>
          }
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 0px 20px 20px'}}>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
              {data.frontmatter.tags && data.frontmatter.tags.map(tag => (
                <p style={{ margin: '0px 5px 5px 0px', fontSize: 14, color: '#bfbfbf' }}>#{tag.toUpperCase()}</p>
              ))}
            </div>
            <h1 style={{ color: '#fff'}}>{data.frontmatter.title}</h1>
            <p>{data.excerpt}</p>
          </div>
        </div>)
      )}

      <p style={{ marginTop: 35}}>Share on twitter or something <span className={'emojis'} role="img" aria-label="Face With Hand Over Mouth">🤭</span> </p>
    </Layout>
  )
}
