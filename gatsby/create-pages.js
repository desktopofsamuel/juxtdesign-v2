const path = require('path');
// const _ = require('lodash');

// const createCategoriesPages = require('./pagination/create-categories-pages.js');
// const createTagsPages = require('./pagination/create-tags-pages.js');
// const createPostsPages = require('./pagination/create-posts-pages.js');

const query = `
  {
    posts: allMdx(
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
  }
`;

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(query);
  if (response.errors) throw new Error(response.errors);
  const { posts, pages } = response.data;

  // pages.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: path.resolve('./src/templates/page-template.js'),
  //     context: { slug: node.fields.slug },
  //   });
  // });

  posts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-template.js'),
      context: { slug: node.fields.slug },
    });
  });

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
