const config = {
  siteTitle: 'JUXT Design', // Site title.
  siteTitleShort: 'JUXT Design', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'JUXT Design', // Alternative site title for SEO.
  siteLogo: '/favicon.png', // Logo used for SEO and manifest.
  siteUrl: 'https://juxtdesign.co', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'One stop guide and resources for product design, UI/UX design.', // Website description used for RSS feeds/meta description tag.
  siteKeywords: 'design, user experience, user interface, ui, ux, product',
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'JUXT Design', // Title of the RSS feed
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 6, // Amount of posts displayed per listing page.
  userName: 'JUXT Design', // Username to display in the author segment.
  userEmail: 'juxtdesignco@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '@juxtdesignco', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Internet', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Instagram',
      url: 'https://instagram.com/juxtdesignco',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/juxtdesignco',
    },
  ],
  copyright: 'Copyright © 2021. JUXT Design', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#134042', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  menu: [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
  ],
  secondarymenu: [
    {
      label: 'Design',
      path: '/tags/design',
    },
    {
      label: 'Typography',
      path: '/tags/typography',
    },
    {
      label: 'Tech',
      path: '/categories/tech',
    },
  ],
};

// Validate

// Make sure pathPrefix is empty if not needed
// if (config.pathPrefix === '/') {
//   config.pathPrefix = '';
// } else {
//   // Make sure pathPrefix only contains the first forward slash
//   config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
// }

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
