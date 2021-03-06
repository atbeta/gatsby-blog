import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const About = ({data}) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> {/* highlight-line */}
    <p>
      {data.site.siteMetadata.description}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`