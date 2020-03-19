import React from "react"
import { Link, graphql } from "gatsby"
// import { linkResolver } from "gatsby-source-prismic-graphql"
import { linkResolver } from '../utils/linkResolver'
import htmlSerializer from '../utils/htmlSerializer';

import Layout from "../components/layout"
import RichText from "../components/richText";

export const query = graphql`
  {
    prismic {
      allMusics {
        edges {
          node {
            _meta {
              uid
            }
            text
            title
            _linkType
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const doc = data.prismic.allMusics.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout>
      <RichText render={doc.node.text}/>
    </Layout>
  )
}
