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
        icon: `static/favicon.svg`,
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
            serialize: ({ query: { site, allPrismicBlog } }) =>
              allPrismicBlog.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.data.excerpt,
                date: edge.node.fields.date,
                url: `${site.siteMetadata.rssMetadata.site_url}/posts${edge.node.fields.slug}/`,
                guid: `${site.siteMetadata.rssMetadata.site_url}/posts${edge.node.fields.slug}/`,
                author: site.siteMetadata.rssMetadata.userName,
                custom_elements: [
                  {
                    'content:encoded': `<img src={edge.node.feature.gatsbyImageData.publicURL}/>`
                      edge.node.html,
                      
                  },
                ],
              })),
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [fields___date] },
                filter: {frontmatter: { draft: { ne: true }, template: { eq: "digest" }}},
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      template
                      title
                      date
                      category
                      tags
                      url
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
