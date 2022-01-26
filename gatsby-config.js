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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        // resolveSiteUrl: ({
        //   site: {
        //     siteMetadata: { url },
        //   },
        // }) => url,
        // resolvePages: ({ allSitePage: { nodes: postnodes } }) => {
        //   console.log(postnodes);
        //   const posts = postnodes.map((post) => ({
        //     path: post.path,
        //     changefreq: 'weekly',
        //     priority: 0.7,
        //   }));
        //   return [...posts];
        // },
        // serialize: ({ path, lastmod, changefreq, priority }) => ({
        //   url: path,
        //   lastmod,
        //   changefreq,
        //   priority,
        // }),
        // filterPages: ({ }) => {

        // },
        // excludes: [
        //   `/dev-404-page`,
        //   `/404`,
        //   `/404.html`,
        //   `/offline-plugin-app-shell-fallback`,
        //   `/my-excluded-page`,
        //   /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
        // ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-advanced-sitemap`,
    //   options: {
    //     // 1 query for each data type
    //     query: `
    //       {
    //         allPrismicBlog {
    //           edges {
    //             node {
    //               uid
    //               id
    //             }
    //           }
    //         }
    //         allPrismicCategory {
    //           edges {
    //             node {
    //               id
    //               uid
    //             }
    //           }
    //         }
    //         allPrismicPost {
    //           edges {
    //             node {
    //               uid
    //               id
    //             }
    //           }
    //         }
    //       }
    //       `,
    //     // The filepath and name to Index Sitemap. Defaults to '/sitemap.xml'.
    //     // output: "/custom-sitemap.xml",
    //     mapping: {
    //       // Each data type can be mapped to a predefined sitemap
    //       // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
    //       // The default sitemap - if none is passed - will be pages
    //       allPrismicBlog: {
    //         sitemap: `blogs`,
    //         // Add a query level prefix to slugs, Don't get confused with global path prefix from Gatsby
    //         // This will add a prefix to this perticular sitemap only
    //         prefix: 'blog/',
    //         serializer: (edges) =>
    //           edges.map(
    //             ({ node }) => node.uid, // Custom logic to change final sitemap.
    //           ),
    //       },
    //       allPrismicCategory: {
    //         sitemap: `tags`,
    //         prefix: 'tags/',
    //         serializer: (edges) =>
    //           edges.map(
    //             ({ node }) => node.uid, // Custom logic to change final sitemap.
    //           ),
    //       },
    //       allPrismicPost: {
    //         sitemap: `resources`,
    //         prefix: 'resources/',
    //         serializer: (edges) =>
    //           edges.map(
    //             ({ node }) => node.uid, // Custom logic to change final sitemap.
    //           ),
    //       },
    //     },
    //     exclude: [
    //       `/dev-404-page`,
    //       `/404`,
    //       `/404.html`,
    //       `/offline-plugin-app-shell-fallback`,
    //       `/my-excluded-page`,
    //       /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
    //     ],
    //     createLinkInHead: true, // optional: create a link in the `<head>` of your site
    //     addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
    //     // additionalSitemaps: [ // optional: add additional sitemaps, which are e. g. generated somewhere else, but need to be indexed for this domain
    //     //     {
    //     //         name: `my-other-posts`,
    //     //         url: `/blog/sitemap-posts.xml`,
    //     //     },
    //     //     {
    //     //         url: `https://example.com/sitemap.xml`,
    //     //     },
    //     // ],
    //   },
    // },
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
