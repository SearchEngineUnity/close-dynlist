import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import DynlistSegment from '../components/DynlistSegment';
import LrSegment from '../components/LrSegment';
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
          list
          category {
            title
            name
          }
          categorySet {
            title
            name
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
  }
`;
export default ({ data }) => {
  const type = 'page';
  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        <div className="solid-background--top--grey" />
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
                  sectionStyle={sectionStyle}
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
      </main>
    </Layout>
  );
};
