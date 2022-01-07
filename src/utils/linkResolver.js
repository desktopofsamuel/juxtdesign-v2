const kebabCase = require('lodash.kebabcase');

exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'post') {
    return `/resources/${kebabCase(doc.uid)}/`;
  }

  // URL for a product type
  if (doc.type === 'blog') {
    return `/blog/${kebabCase(doc.uid)}/`;
  }

  if (doc.type === 'category') {
    return `/tags/${kebabCase(doc.uid)}/`;
  }

  // Backup for all other types
  return '/';
};
