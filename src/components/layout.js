import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

export const Layout = ({ children, style, Footer, mainClassName }) => {
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
      <div style={style}>
        <main className={mainClassName ? mainClassName : 'main-container'}>
          {children}
        </main>
        { Footer &&  <Footer />}
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
