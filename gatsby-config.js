/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Rallentando`,
    description: `オリジナル同人音楽サークル`,
    lang: `ja`,
    siteUrl: `https://rallentando.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXX`,
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
