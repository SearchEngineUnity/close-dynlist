import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

function DynlistMenuDesktop({ col, h1, subtitle, byline, author }) {
  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
}

DynlistMenuDesktop.propTypes = {
  col: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  subtitle: PropTypes.array.isRequired,
  byline: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default DynlistMenuDesktop;
