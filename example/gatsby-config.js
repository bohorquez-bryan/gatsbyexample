module.exports = {
  siteMetadata: {
    title: `Tenderati`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./credentials.json"),
        types: [
          {
            type: 'Distribuidores',
            collection: 'distributor',
            map: doc => ({
              code: doc.code,
              email: doc.email,
              zone: doc.zone,
              password: doc.password,
              name: doc.name,
              lastname: doc.lastname,
            })
          },
          {
            type: 'Usuarios',
            collection: 'users',
            map: doc => ({
              email: doc.email,
              photo: doc.photo,
              phone_cell: doc.phone_cell,
              password: doc.password,
              name: doc.name,
              lastname: doc.lastname,
            })
          },
        ]
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
