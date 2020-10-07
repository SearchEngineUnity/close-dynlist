import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuoteCard from './QuoteCard';
import DynlistMenuDesktop from './DynlistMenuDesktop';
import { mapQuoteCardToProps } from '../lib/mapToProps';

function Dynlist({ data, sectionStyle, parameters, categoryId, categorySetId }) {
  const { nodes: allQuotes } = data.allSanityQuote;
  const { nodes: fullCategorySet } = data.allSanityCategorySet;
  const { menu } = parameters.menu;
  console.log(fullCategorySet);
  console.log(categoryId, categorySetId);

  const filteredQuotes = allQuotes.filter((quote) => {
    // console.log(categoryId, categorySetId);
    const categories = [];

    if (quote.primary) {
      categories.push(quote.primary._id);
    }

    quote.secondary.forEach((el) => {
      if (el) {
        categories.push(el._id);
      }
    });

    quote.qualifying.forEach((el) => {
      if (el) {
        categories.push(el._id);
      }
    });

    // console.log(categories);
    return true;
  });

  return (
    <section className={sectionStyle} style={{ backgroundColor: '#f2f3f9' }}>
      <div className="container">
        <Row style={{ width: 'auto' }}>
          <Col xs={12} lg={3} md={4}>
            <DynlistMenuDesktop menu={menu} />
          </Col>
          <Col xs={12} lg={9} md={8}>
            <Row style={{ width: 'auto' }}>
              {allQuotes.map((el) => {
                return <QuoteCard {...mapQuoteCardToProps(el)} key={el._id} />;
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
export default function DynlistSegment(props) {
  console.log(props);

  return (
    <StaticQuery
      query={graphql`
        {
          allSanityQuote {
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
          allSanityCategorySet {
            nodes {
              set {
                _id
              }
              _id
            }
          }
        }
      `}
      render={(data) => <Dynlist data={data} {...props} />}
    />
  );
}

DynlistSegment.propTypes = {
  sectionStyle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  parameters: PropTypes.object.isRequired,
};
