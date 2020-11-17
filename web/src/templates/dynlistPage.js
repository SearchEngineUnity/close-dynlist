import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import DynlistSegment from '../components/DynlistSegment';
import LrSegment from '../components/LrSegment';
import BackToTopFAB from '../components/BackToTopFAB';
import { mapSeoToProps } from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityDynlistPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      description
      twitter {
        description
        title
      }
      nofollow
      noindex
      facebook {
        description
        image {
          asset {
            url
          }
        }
        title
      }
      segments {
        ... on SanityDynListSegment {
          _key
          _type
          category {
            title
            name
            _id
          }
          categorySet {
            title
            name
            _id
          }
          breadcrumb {
            nav {
              slug {
                current
              }
            }
            _key
            label
            shortLabel
          }
          desktopMenu {
            menu {
              ... on SanityNavGroup {
                _key
                _type
                label
                nav {
                  slug {
                    current
                  }
                }
                group {
                  _key
                  nav {
                    slug {
                      current
                    }
                  }
                  label
                }
              }
            }
          }
          mobileMenu {
            menu {
              ... on SanityNavGroup {
                _key
                _type
                label
                nav {
                  slug {
                    current
                  }
                }
                group {
                  icon
                  nav {
                    slug {
                      current
                    }
                  }
                  label
                }
              }
            }
          }
        }
        ... on SanityLrSegment {
          _key
          _type
          layout
          blocks {
            ... on SanityCfForm {
              _key
              _type
              className
              ctaId
              websiteId
            }
            ... on SanityHero {
              _key
              _type
              byline
              name
              title
              _rawSubtitle(resolveReferences: { maxDepth: 10 })
            }
            ... on SanityIllustration {
              _key
              _type
              alt
              asset {
                title
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    quotes: allSanityQuote {
      nodes {
        source
        text
        youtube
        primary {
          title
          name
          _id
        }
        qualifying {
          title
          name
          _id
        }
        secondary {
          title
          name
          _id
        }
        _id
      }
    }
    categorySet: allSanityCategorySet {
      nodes {
        set {
          _id
        }
        _id
      }
    }
  }
`;
export default ({ data, pageContext }) => {
  const location = useLocation();
  useEffect(() => {
    // code to run on component mount
    if (location.key !== 'initial') {
      document.getElementById('dynlistPage').scrollIntoView();
    }

    // const script = document.createElement('script');
    // script.src = 'https://close.com/static/dist/scripts.min.js?h=b3f57533';
    // script.async = true;
    // document.getElementById('dynlistPage').appendChild(script);
  });

  const type = 'quotes';

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main id="dynlistPage">
        {data.page.segments.map((segment, index) => {
          const { _type } = segment;
          const sectionStyle =
            index === data.page.segments.length - 1 ? 'section section--last' : 'section';
          switch (_type) {
            case 'dynListSegment':
              return (
                <DynlistSegment
                  key={segment._key}
                  parameters={segment}
                  quotes={data.quotes.nodes}
                  categorySet={data.categorySet.nodes}
                  sectionStyle={sectionStyle}
                  {...pageContext}
                />
              );

            case 'lrSegment':
              return (
                <LrSegment
                  key={segment._key}
                  blocks={segment.blocks}
                  layout={segment.layout}
                  sectionStyle={sectionStyle}
                />
              );

            default:
              return <div key="default"> Still under development</div>;
          }
        })}
        <BackToTopFAB divId="dynlistPage" />
      </main>
    </Layout>
  );
};
