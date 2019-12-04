import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          paddingTop: 0,
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#151515',
          color: '#fff'
        }}
      >
        <main style={{     padding: 60
        }}>{children}</main>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
