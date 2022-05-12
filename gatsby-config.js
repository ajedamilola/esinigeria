module.exports = {
  pathPrefix: "esinigeria",
  siteMetadata: {
    title: `Elitist Solution International`,
    siteUrl: `https://www.esinigeria.com.ng`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "rgb(16, 190, 16)",
        showSpinner: true,
      },
    },
  ],
};
