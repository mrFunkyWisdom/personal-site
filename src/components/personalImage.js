import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export const PersonalImage = () => {
  const {placeholderImage} = useStaticQuery(graphql`
      query {
      placeholderImage: file(relativePath: { eq: "meimage.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     },
  `);


  return <Img style={{ height: 90, width: 90, borderRadius: '50%'}} fluid={placeholderImage.childImageSharp.fluid }/>
}