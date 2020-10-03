import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

function ImageBlock({ col, image, alt }) {
  return (
    <div className={col}>
      <Img fluid={image} alt={alt} />
    </div>
  );
}

ImageBlock.propTypes = {
  col: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBlock;
