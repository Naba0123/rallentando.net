/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Rallentando`,
    description: `オリジナルピアノ曲を中心に作曲し、楽曲や楽譜の頒布、配信を行っているサークルです。`,
    lang: `ja`,
    siteUrl: `https://rallentando.net`,
    locale: `ja_JP`,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              quality: 90,
              linkImagesToOriginal: true,
            }
          }
        ]
      },
    }
  ],
}
