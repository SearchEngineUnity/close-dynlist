import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuoteCard from './QuoteCard';
import DynlistMenuDesktop from './DynlistMenuDesktop';
import { mapQuoteCardToProps } from '../lib/mapToProps';

function Dynlist({ data, sectionStyle, parameters }) {
  const { allSanityQuote } = data;
  const { menu } = parameters.menu;
  console.log(menu);
  return (
    <section className={sectionStyle} style={{ backgroundColor: '#f2f3f9' }}>
      <div className="container">
        <Row>
          <Col xs={12} md={3}>
            <DynlistMenuDesktop menu={menu} />
          </Col>
          <Col xs={12} md={9}>
            <Row style={{ width: 'auto' }}>
              {allSanityQuote.edges.map((el) => {
                return <QuoteCard {...mapQuoteCardToProps(el.node)} key={el.node._id} />;
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
        query {
          allSanityQuote {
            edges {
              node {
                _id
                source
                text
                youtube
                primary {
                  title
                  name
                }
                qualifying {
                  title
                  name
                }
                secondary {
                  title
                  name
                }
              }
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
