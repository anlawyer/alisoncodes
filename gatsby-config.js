module.exports = {
  siteMetadata: {
    title: `alison codes dot com`,
    siteUrl: `https://www.alisoncodes.com`,
    description: `Alison's personal website.`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans", "Lato", "Lora"]
        }
      }
    }
  ]
};
