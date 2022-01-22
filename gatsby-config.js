const urljoin = require('url-join');
const config = require('./SiteConfig');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(config.siteUrl, config.pathPrefix)}/favicon.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        // lang: "zh-hk",
        schemas: {
          blog: require('./src/schemas/blog.json'),
          category: require('./src/schemas/category.json'),
          hero_links: require('./src/schemas/category.json'),
          homepage: require('./src/schemas/homepage.json'),
          post: require('./src/schemas/post.json'),
          hero: {},
          projects: require('./src/schemas/projects.json'),
          type: require('./src/schemas/type.json'),
        },
        linkResolver: require('./src/utils/linkResolver').linkResolver,
        shouldDownloadFiles: {
          'blog.data.feature': true,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-theme-stitches',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JUXT Design`,
        short_name: `JUXT Design`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#025050`,
        display: `standalone`,
        icon: `./static/favicon.svg`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KMZKK6Q',
        // defer: true,
        enableWebVitalsTracking: true,
      },
    },
  ],
};
