module.exports = {
  pathPrefix: ".",
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
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/dir`,
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
