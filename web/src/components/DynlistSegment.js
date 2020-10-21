import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuoteCard from './QuoteCard';
import DynlistMenuDesktop from './DynlistMenuDesktop';
import DynlistMenuMobile from './DynlistMenuMobile';
import Breadcrumb from './DynlistBreadcrumb';
import { mapQuoteCardToProps } from '../lib/mapToProps';

// helper
const findCommonElements = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};
// category evaluator function
const categoryValue = (quote, id) => {
  if (quote.primary._id === id) {
    return 1;
  }
  if (quote.secondary.map((el) => el._id).includes(id)) {
    return 2;
  }
  return 3;
};
// Fisher-Yates shuffle
function shuffle(array) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    // eslint-disable-next-line no-plusplus
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    // eslint-disable-next-line no-param-reassign
    array[m] = array[i];
    // eslint-disable-next-line no-param-reassign
    array[i] = t;
  }

  return array;
}

export default function DynlistSegment({
  quotes,
  categorySet,
  sectionStyle,
  parameters,
  categoryId,
  categorySetId,
}) {
  const { desktopMenu, mobileMenu, breadcrumb } = parameters;

  const allCategorySetIds = categorySet.map((el) => {
    const setIds = el.set.map((x) => x._id);
    const value = {
      _id: el._id,
      setIds,
    };
    return value;
  });

  const filteredQuotes = quotes.filter((quote) => {
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

    if (categoryId) {
      return categories.includes(categoryId);
    }

    if (categorySetId) {
      const selectedCategorySet = allCategorySetIds.filter((el) => el._id === categorySetId);
      return findCommonElements(categories, selectedCategorySet[0].setIds);
    }

    return true;
  });

  if (categorySetId && categoryId === null) {
    shuffle(filteredQuotes);
  }

  // sorting by category
  if (categoryId && categorySetId) {
    filteredQuotes.sort((a, b) => {
      const categoryValueA = categoryValue(a, categoryId);
      const categoryValueB = categoryValue(b, categoryId);

      if (categoryValueA < categoryValueB) {
        return -1;
      }
      if (categoryValueA > categoryValueB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  return (
    <>
      <div className="solid-background--top--grey" />
      <section className={sectionStyle} style={{ backgroundColor: '#f2f3f9' }}>
        <DynlistMenuMobile menu={mobileMenu.menu} />
        <div className="container">
          <Row style={{ width: 'auto' }}>
            <Col>
              <Breadcrumb breadcrumb={breadcrumb} />
            </Col>
          </Row>
          <Row style={{ width: 'auto' }}>
            <Col xs={12} lg={3} md={4} sm={4}>
              <DynlistMenuDesktop menu={desktopMenu.menu} />
            </Col>
            <Col xs={12} lg={9} md={8} sm={8}>
              <Row style={{ width: 'auto' }}>
                {filteredQuotes.map((el) => {
                  return <QuoteCard {...mapQuoteCardToProps(el)} key={el._id} />;
                })}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

DynlistSegment.propTypes = {
  sectionStyle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  parameters: PropTypes.object.isRequired,
};
