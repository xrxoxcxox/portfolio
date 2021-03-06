require('dotenv').config()

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Keisuke Watanuki Portfolio`,
    description: `アイデアルデザイナー、綿貫佳祐のポートフォリオです。デジタルプロダクトやユーザー体験をデザインしています。`,
    author: `@xrxoxcxox`,
    siteUrl: `https://www.keisukewatanuki.work`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 592,
              srcSetBreakpoints: [375, 428, 768],
              linkImagesToOriginal: false,
              quality: 85,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `release-notes`,
        path: `${__dirname}/src/release-notes/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 592,
              linkImagesToOriginal: false,
              quality: 85,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Keisuke Watanuki Portfolio`,
        short_name: `Keisuke Watanuki Portfolio`,
        start_url: `/`,
        background_color: `#0074af`,
        theme_color: `#0074af`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-netlify`,
  ],
}
