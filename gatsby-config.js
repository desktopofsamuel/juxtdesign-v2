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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/content/vault/media`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/default-template.js'),
        },
        plugins: [
          `gatsby-remark-images`,
          'gatsby-remark-unwrap-images',
          // `gatsby-remark-images-medium-zoom`, // Important!
        ],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-wiki-link`,
          //   options: {
          //     slugify: `${__dirname}/src/utils/make-slug.js`,
          //     stripBrackets: true,
          //   },
          // },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'media',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              // include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              // exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
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
        // output: `/sitemap.xml`,
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KMZKK6Q',
        // defer: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMdx = ref.query.allMdx;
          ret.generator = 'GatsbyJS Advanced Starter';
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
                author
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.fields.date,
                url: `${site.siteMetadata.rssMetadata.site_url}${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.rssMetadata.site_url}${edge.node.fields.slug}`,
                author: site.siteMetadata.rssMetadata.author,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
            {
              allMdx(
                filter: {frontmatter: {publish: {ne: false}}}
                sort: {order: DESC, fields: fields___date}
              ) {
                edges {
                  node {
                    frontmatter {
                      category
                      date
                      featured
                      publish
                      title
                    }
                    html
                    slug
                    excerpt(pruneLength: 300)
                    fields {
                      slug
                      title
                      date

                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: config.siteRssTitle,
          },
        ],
      },
    },
  ],
};
