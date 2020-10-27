import React from 'react';
import { Fab } from 'react-tiny-fab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DesktopWrapper = styled.div`
  @media (max-width: 575.98px) {
    display: none;
  }
`;

function BackToTopFAB({ divId }) {
  const onClickHandler = () => {
    // code to run on component mount
    document.getElementById(divId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <DesktopWrapper>
      <Fab
        mainButtonStyles={{
          backgroundColor: 'black',
          color: 'white',
        }}
        icon={<i className="fas fa-angle-double-up" />}
        // actionButtonStyles={actionButtonStyles}
        style={{ bottom: 0, right: 0 }}
        event="click"
        // alwaysShowTitle
        onClick={() => onClickHandler()}
      />
    </DesktopWrapper>
  );
}

BackToTopFAB.propTypes = {};

export default BackToTopFAB;
