module.exports = {
	pathPrefix: "/esinigeria",
  siteMetadata: {
    title: `Elitist Solution International`,
    siteUrl: `https://www.esinigeria.com.ng`
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};