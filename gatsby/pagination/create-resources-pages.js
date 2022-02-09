const path = require('path');
const siteConfig = require('../../SiteConfig');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allPrismicPost {
        totalCount
        edges {
          node {
            data {
              date
            }
          }
        }
      }
    }
  `);

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(
    result.data.allPrismicPost.totalCount / postsPerPage,
  );

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/resources/' : `/resources/page/${i}`,
      component: path.resolve('./src/templates/resource-index-template.tsx'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/' : `/resources/page/${i - 1}`,
        nextPagePath: `/resources/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
      },
    });
  }
};
