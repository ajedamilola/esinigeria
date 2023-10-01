module.exports = {
  pathPrefix: ".",
  siteMetadata: {
    title: `Elitist Solution International`,
    siteUrl: `https://www.esinigeria.com.ng`,
    phone:"+2349023727066",
    email:"info@esinigeria.com.ng",
    address:"Head Office: REINSURANCE Building 47, Marina, Lagos Island, Apapa Office: 9 Ibikunle Akintoye Street, opp Apapa Health centre, Apapa, Lagos.",
    description:" ESI was borne out of the desire to create an indigenous brand that will meet the I.T needs of organizations and individuals both locally and globally by providing first class services, products and innovations while creating an avenue for talented individuals to express themselves technologically",
    backend:"https://www.esinigeria.com.ng/api"
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
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "rgb(16, 190, 16)",
        showSpinner: true,
      },
    },
  ],
};
//131.153.147.42
