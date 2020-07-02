import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Index = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>文章列表</h1>
        <h4>共{data.allStrapiPost.totalCount} 篇文章</h4>
        {data.allStrapiPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.url}>
            <h3>
              {node.title}{" "}
              <span>
                — {node.created_at}
              </span>
            </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allStrapiPost {
    edges {
      node {
        content
        id
        title
        excerpt
        created_at
        url
        public
        cover {
          publicURL
        }
        tags {
          name
          slug
        }
        author {
          username
        }
      }
    }
  }
  }
`