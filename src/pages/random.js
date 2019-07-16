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
	  <div>
            <Link to="/random">Pick Another</Link>
          </div>
          <div style={{ margin: "0.85rem" }}>
            <Image fluid={randomizedImage.fluid} />
          </div>
        </Layout>
      )
    }}
  />
)
