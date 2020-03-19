import React from 'react';
import { graphql, Link } from 'gatsby';
import RichText from '../components/richText';

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            page_title
            _meta {
              id
              uid
            }
            page_title
            text
          }
        }
      }
    }
  }
`;

const Page = props => {
  console.log(props);
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
  const pageBody = props.data.prismic.allPages.edges[0].node.text;
  return (
    <>
      <RichText render={pageTitle} />
      <RichText render={pageBody} />
    </>
  );
};

export default Page;
