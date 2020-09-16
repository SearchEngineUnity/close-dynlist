import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgContain = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

function ImageBox({ image, alt }) {
  return (
    <ImgContain>
      <img loading="lazy" src={image} alt={alt} />
    </ImgContain>
  );
}

ImageBox.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBox;
