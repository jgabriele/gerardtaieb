module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "mu6l8m30j3xm",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "gatsby.fruitygames.fr",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/globals/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
