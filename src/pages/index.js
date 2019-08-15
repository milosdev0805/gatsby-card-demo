import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "./mystyles.scss"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <p>Click the image to choose a random card</p>
    <Link to="/random"><Img fluid={props.data.imageOne.childImageSharp.fluid} /></Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "key00.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
