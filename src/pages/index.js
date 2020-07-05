import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from '../components/post-card'

const Index = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>文章列表</h1>
        <h4>共{data.allStrapiPost.totalCount} 篇文章</h4>
        {data.allStrapiPost.edges.map(({ node }) => (
          <PostCard {...node} key={node.id}/>
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