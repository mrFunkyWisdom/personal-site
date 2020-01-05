import React from "react"

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
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness. :( </p>
  </Layout>
)

export default NotFoundPage
