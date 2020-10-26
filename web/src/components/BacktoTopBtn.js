import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MobileNav = styled.nav`
  display: flex;
  @media (min-width: 576px) {
    display: none;
  }
`;

function BacktoTopBtn({ divId, children }) {
  const onClickHandler = () => {
    // code to run on component mount
    document.getElementById(divId).scrollIntoView();
  };
  return <Button onClick={() => onClickHandler}>{children}</Button>;
}

BacktoTopBtn.propTypes = {};

export default BacktoTopBtn;
