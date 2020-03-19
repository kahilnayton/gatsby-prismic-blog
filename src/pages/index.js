import React from "react"
import { Link, graphql } from "gatsby"
// import { linkResolver } from "gatsby-source-prismic-graphql"
import { linkResolver } from '../utils/linkResolver';
import Layout from "../components/layout"
import { RichText } from "prismic-reactjs"

export const query = graphql`
  {
    prismic {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
            body
            header
            _linkType
          }
        }
      }
      allBlogpages {
        edges {
          node {
            _meta {
              uid
            }
            post {
              post1 {
                ... on PRISMIC_Post {
                  header
                  body
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogPosts = ({ posts }) => {
  if (!posts) return null
  return (
    <div>
      <p>{RichText.asText(posts[0].node.body)}</p>
      <Link to={linkResolver(posts[0].node._meta)}>hello</Link>
    </div>
  )
}

export default ({ data }) => {
  const doc = data.prismic.allBlogpages.edges.slice(0, 1).pop()
  const posts = data.prismic.allPosts.edges

  if (!doc) return null

  return (
    <Layout>
      <div>
        <h1>{RichText.asText(doc.node.post[0].post1.header)}</h1>
        <p>{RichText.asText(doc.node.post[0].post1.body)}</p>
      </div>
      <BlogPosts posts={posts} />
    </Layout>
  )
}
