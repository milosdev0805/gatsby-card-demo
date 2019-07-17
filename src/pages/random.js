import React from "react"
import Image from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp {
          edges {
            node {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { allImageSharp } = data
      const { edges } = allImageSharp
      const randomPosition = randomGenerator(0, edges.length - 1)
      const randomizedImage = edges[randomPosition].node
      return (
        <Layout>
          <p>Click the image to choose a random card</p>
          <Link to="/random"><Image fluid={randomizedImage.fluid} /></Link>
        </Layout>
      )
    }}
  />
)
