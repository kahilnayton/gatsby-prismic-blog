// import React from 'react';
// import { RichText } from 'prismic-reactjs';
// import { graphql } from 'gatsby';
// import {linkResolver} from '../utils/linkResolver'
// import get from 'lodash/get';

// export const query = graphql`
//   query BlogPost($uid: String) {
//     prismic {
//       allBlogposs(uid: $uid) {
//         edges {
//           node {
//             _meta {
//               uid
//               lang
//             }
//             title
//             body
//           }
//         }
//       }
//     }
//   }
// `;

// const BlogPost = props => {

//   if (!data) {
//     return null;
//   }

//   return (
//     <div id="blogpost">
//       <h1>{RichText.asText(data.title)}</h1>
//       {RichText.render(data.body, linkResolver)}
//     </div>
//   );
// };

// export default BlogPost;
