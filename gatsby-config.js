
module.exports = {
  siteMetadata: {
    title: `Pastries`,
    description: `The best pastries for every moment, check our locations in US`,
    author: `yenisbelvalle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: "gatsby-theme-location-mapper",
      options: {},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yenisbel valle`,
        short_name: `yenisbelvalle`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
