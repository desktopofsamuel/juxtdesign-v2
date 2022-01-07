require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
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
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-theme-stitches',
  ],
};
