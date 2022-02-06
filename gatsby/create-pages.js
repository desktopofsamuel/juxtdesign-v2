const path = require('path');
const kebabCase = require('lodash.kebabcase');
// const _ = require('lodash');

// const createCategoriesPages = require('./pagination/create-categories-pages.js');
// const createTagsPages = require('./pagination/create-tags-pages.js');
// const createPostsPages = require('./pagination/create-posts-pages.js');

const query = `
  {
    guides: allMdx(
      filter: {frontmatter: {publish: {ne: false}}, fileAbsolutePath: {regex: "/vault/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    posts: allPrismicPost {
      edges {
        node {
          url
          data {
            categories {
              category {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tagSet = new Set();
  const response = await graphql(query);
  if (response.errors) throw new Error(response.errors);
  const { guides, posts } = response.data;

  // pages.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: path.resolve('./src/templates/page-template.js'),
  //     context: { slug: node.fields.slug },
  //   });
  // });

  guides.edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-template.js'),
      context: { slug: node.fields.slug },
    });
  });

  posts.edges.forEach(({ node }) => {
    createPage({
      path: node.url,
      component: path.resolve('./src/templates/post-template.tsx'),
      context: {
        slug: node.url,
        tag: node.data.categories.map((item) => item.category.url),
      },
    });
  });

  // tagSet.forEach((tag) => {
  //   createPage({
  //     path: `/tags/${kebabCase(tag)}/`,
  //     component: path.resolve('./src/pages/{PrismicCategory.url}.tsx'),
  //     context: {
  //       tag,
  //       slug: `/tags/${kebabCase(tag)}/`,
  //     },
  //   });
  // });

  // await createTagsPages(graphql, actions);
  // await createPostsPages(graphql, actions);
  // await createCategoriesPages(graphql, actions);
};

module.exports = createPages;

// _.each(edges, (edge) => {
// if (_.get(edge, 'node.frontmatter.template') === 'page') {
//   createPage({
//     path: edge.node.fields.slug,
//     component: path.resolve('./src/templates/page-template.js'),
//     context: { slug: edge.node.fields.slug },
//   });
// }
// if (_.get(edge, 'node.frontmatter.template') === 'digest') {
//   createPage({
//     path: edge.node.fields.slug,
//     component: path.resolve('./src/templates/short-post-template.js'),
//     context: { slug: edge.node.fields.slug },
//   });
// }
//   if (_.get(edge, 'node.frontmatter.template') === 'post') {
//     createPage({
//       path: edge.node.fields.slug,
//       component: path.resolve('./src/templates/post-template.js'),
//       context: { slug: edge.node.fields.slug },
//     });
//   }
// });
