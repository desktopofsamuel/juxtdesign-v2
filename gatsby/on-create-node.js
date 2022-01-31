const dayjs = require(`dayjs`);
const path = require(`path`);
const kebabCase = require('lodash/kebabCase');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);

  fmImagesToRelative(node);

  if (node.internal.type === 'Mdx') {
    // const source = fileNode.sourceInstanceName;
    // const parsedFilePath = path.parse(fileNode.relativePath);
    // let title;
    // let slug;

    // if (
    //   Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    //   Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    // ) {
    //   slug = `/${kebabCase(node.frontmatter.title)}`;
    // } else {

    // }

    const kebabFilename = kebabCase(fileNode.sourceInstanceName);

    const fileSlug = createFilePath({
      node,
      getNode,
      basePath: `vault/`,
    });

    let postSlug;

    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      postSlug = node.frontmatter.slug;
    }
    // if (
    //   Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    //   Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    // )
    else {
      postSlug = kebabCase(node.frontmatter.title);
    }
    // else {
    //   postSlug = kebabFilename;
    //   console.log(kebabFilename);
    // }

    createNodeField({
      node,
      name: 'slug',
      value: `/guides/${postSlug}/`,
    });

    // if (
    //   Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    //   Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    // ) {
    //   fileName = node.frontmatter.title;
    // } else {
    //   fileName = fileNode.name;
    // }

    const postTitle = node.frontmatter.title || fileNode.name;

    createNodeField({
      node,
      name: 'title',
      value: postTitle,
    });

    // const date = fileNode.birthTime;
    // const processedFileDate = dayjs(date).format(dateFormat);

    if (node.frontmatter.date) {
      // const processedFrontmatterDate = dayjs(node.frontmatter.date).format(
      //   dateFormat,
      // );
      createNodeField({
        node,
        name: 'date',
        value: dayjs(node.frontmatter.date).toDate(),
      });
    } else {
      createNodeField({
        node,
        name: 'date',
        value: dayjs(fileNode.birthTime).toDate(),
      });
    }

    // const dateFormat = `DD MMM YYYY`;
    // createNodeField({
    //   node,
    //   name: 'date',
    //   value: dayjs(fileNode.birthTime).format(dateFormat),
    // });

    // console.log(processedFrontmatterDate, processedFileDate);

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        (tag) => `/tags/${kebabCase(tag)}/`,
      );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

module.exports = onCreateNode;
