import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer} from "../components"
import { BlogHeader } from "../components/blogHeader"
import { graphql, Link, useStaticQuery } from "gatsby"
import './blogPageStyle.css';
import { BlogPreviewArticle } from "../components/blogPreviewArticle"

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
    <Layout style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}} Footer={Footer}>
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
