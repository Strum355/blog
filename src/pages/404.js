import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 id="glitch1" data-text="404 Schrödinger's Page">404 Schrödinger's Page</h1>
      <p id="glitch2" data-text="Ain't nobody here but us anchovies">Ain&#39;t nobody here but us anchovies <span role="img">👁️</span></p>
      <Image fluid={data.image.childImageSharp.fluid}/>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    image: file(absolutePath: { regex: "/glitch.png/" }) {
        childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
        }
    }
  }
`
