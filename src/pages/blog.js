import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Footer, BlogPreviewArticle, BlogHeader, SEO, Layout } from "../components"
import './blogPageStyle.css';

const Blog = () => {
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
                    fluid(
                      maxWidth: 900
                      traceSVG: { background: "#000", color: "#23e5a5" }
                    ) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
               fields {
                  slug
               }
            }
          }
      }
  `);

  return(
    <Layout
      mainClassName={'blog-main-container'}
      style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center'}}
      Footer={Footer}>
      <SEO title="Blog" />
      <BlogHeader />
      { articles.map(data => (
        <BlogPreviewArticle
          key={data.id}
          date={data.frontmatter.date}
          featuredImage={data.frontmatter.featuredImage.childImageSharp.fluid }
          slug={data.fields.slug}
          tags={data.frontmatter.tags}
          excerpt={data.excerpt}
          title={data.frontmatter.title}
        />)
      )}
    </Layout>
  )
}

export default Blog;
