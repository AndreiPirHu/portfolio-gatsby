/**
 * @type {import('gatsby').GatsbyConfig}
 */

/*
require("dotenv").config({
  path: `.env.${process.env.node}`
})
*/
module.exports = {
  siteMetadata: {
    title: `Portfolio Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Df9LgV1Qovb0dksBi63PcssUDqGxaZaBIUooTODGUUw",
        spaceId: "x5ov8lh7bw70",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
