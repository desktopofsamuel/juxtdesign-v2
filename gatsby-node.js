const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const kebabCase = require('lodash.kebabcase');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `${kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
  }
  createNodeField({ node, name: 'slug', value: slug });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
  type Mdx implements Node {
    frontmatter: Frontmatter
    fields: Fields
  }

  type Fields {
    slug: String!
  }
  
  type Frontmatter {
    title: String!
    description: String
    date: Date @dateformat
    draft: Boolean
    feature: Boolean
    featurePhoto: File
    externalImage: String!
    tags: [String]
    url: String
  }
  `);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve('src/templates/blog.tsx');
  