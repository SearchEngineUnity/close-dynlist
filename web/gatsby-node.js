// this is a bit like react router the <App /> of react

const path = require('path');

// create all structured pages except for /guides
async function createStructuredPages(actions, graphql) {
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
      path: page.node.slug.current === '/' ? '/quotes' : `/quotes/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/dynlistPage.js`),
      context: {
        slug: page.node.slug.current,
        categoryId: page.node.segments[1].category ? page.node.segments[1].category._id : null,
        categorySetId: page.node.segments[1].categorySet
          ? page.node.segments[1].categorySet._id
          : null,
      },
    });
  });
}

// create redirect
async function createPageRedirects(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityRedirect {
        edges {
          node {
            redirectPaths
            redirectTo
          }
        }
      }
    }
  `);

  const redirectEdges = data.allSanityRedirect.edges;
  redirectEdges.forEach((edge) => {
    const { redirectPaths, redirectTo } = edge.node;
    const toPath = redirectTo;

    redirectPaths.forEach((fromPath) => {
      actions.createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        force: true,
      });
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createStructuredPages(actions, graphql);
  await createPageRedirects(actions, graphql);
};
