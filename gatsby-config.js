module.exports = {
  siteMetadata: {
    title: `alison codes dot com`,
    siteUrl: `http://www.alisoncodes.com`,
    description: `Alison's personal website.`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
