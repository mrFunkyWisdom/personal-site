import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    paddingTop: 0,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#151515',
    color: '#fff'
  }}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND <span  role="img" aria-label="Face Screaming in Fear">😱</span></h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.
      <span className={'emojis'} role="img" aria-label="Crying Face">😭</span> </p>
    <Link to={'/blog'} style={{ color: '#23E5A5'}}>go to the blog</Link>
  </Layout>
)

export default NotFoundPage
