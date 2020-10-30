import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from './block-contents/SeuLPSerializer';

function HeroBlock({ col, h1, subtitle, byline, author }) {
  return (
    <div className={col}>
      <h1>{h1}</h1>
      <BlockContent blocks={subtitle} />
      <br />
      <p>
        {byline} <strong>{author}</strong>
      </p>
    </div>
  );
}

HeroBlock.propTypes = {
  col: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  subtitle: PropTypes.array.isRequired,
  byline: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default HeroBlock;
