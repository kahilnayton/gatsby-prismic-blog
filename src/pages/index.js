import React from "react"
import { graphql } from "gatsby"
import SliceZone from '../components/SliceZone';
import Layout from "../components/Layout"

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyCall_to_action_grid {
              type
              label
              primary {
                section_title
              }
              fields {
                button_label
                call_to_action_title
                button_destination {
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                    }
                  }
                }
                content
                featured_image
              }
            }
            ... on PRISMIC_HomepageBodyPrice_list {
              type
              label
              fields {
                price_list_description
                price_list_title
                price_per_month
                price_type
              }
              primary {
                title
              }
            }
          }
        }
      }
    }
  }
}
`

const IndexPage = (props) => {
  console.log(props);
  return(
  <Layout>
    <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
  </Layout>
)
  }
export default IndexPage