import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import './blogPageStyle.css';
import InstagramIcon from "../../images/instagram.svg"

const BlogPage = () => {

  const meImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "meimage.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout style={{

      backgroundColor: '#151515',
      color: '#fff',
      height: '100vh',
    }}>
      <SEO title="Blog" />

      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Img style={{ height: 90, width: 90, borderRadius: '50%'}} fluid={meImage.placeholderImage.childImageSharp.fluid} />
        <div className={'navigation-container'}>
          <Link to="/" >Home</Link>
          {/*<a href={'#'}>Speaking</a>*/}
          <a href="https://twitter.com/EnsarBavrk/">Twitter</a>
          <a href="https://www.instagram.com/ensar.bavrk/">Instagram</a>
        </div>
      </div>
        <p style={{ marginTop: 35}}>There is no posts on the blog yet 🤭 </p>
    </Layout>
  )
}

export default BlogPage
