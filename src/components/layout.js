/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import NavBar from "./nav-bar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <section className="section">
        <div className="container">
          {children}
        </div>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
