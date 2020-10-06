const path = require('path');

// create all structured pages except for /guides
async function creteStructuredPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityDynlistPage {
        edges {
          node {
            slug {
              current
            }
            segments {
              ... on SanityDynListSegment {
                category {
                  _id
                }
                categorySet {
                  _id
                }
              }
            }
          }
        }
      }
    }
  `);

  const pages = data.allSanityDynlistPage.edges;
  pages.forEach((page) => {
    actions.createPage({
      path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/dynlistPage.js`),
      context: {
        slug: page.node.slug.current,
        categoryId: page.node.segments[1].category ? page.node.segments[1].category._id : 'all',
        categorySetId: page.node.segments[1].categorySet
          ? page.node.segments[1].categorySet._id
          : 'all',
      },
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await creteStructuredPages(actions, graphql);
};
