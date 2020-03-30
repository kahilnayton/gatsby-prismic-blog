const siteMetadata = {
  title: `Ronik starter theme`,
  description: `Ronik theme`,
  image: `src/images/ronik.jpg`,
  siteUrl: `http://www.ronikdesign.com/`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  authorName: `Ronik`,
  author: `Ronik | https://www.ronikdesign.com`,
  twitterUsername: `ronikdesign`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ronik.jpg`, 
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'prismic-repo',
        // path: '/preview',
        // previews: true,
        pages: [
          {
            type: 'Page',
            match: '/:uid',
            path: '/',
            component: require.resolve('./src/templates/page.js'),
          },
        ],
      },
    },
  ],
};
