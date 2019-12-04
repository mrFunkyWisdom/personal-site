import React from "react"
import Layout from "../components/layout"
import TwitterIcon from "../images/twitter.svg";
import InstagramIcon from "../images/instagram.svg";
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey, thanks for visiting!</h1>
    <h4>Unfortunately, my site is still under construction, but in the meantime, we can become friends on Twitter and Instagram </h4>
    <a href="https://twitter.com/EnsarBavrk/" style={{ marginRight: 15}}> <TwitterIcon className={'social-icon'}/></a>
    <a href="https://www.instagram.com/ensar.bavrk/"><InstagramIcon className={'social-icon'}/></a>
  </Layout>
)

export default IndexPage
