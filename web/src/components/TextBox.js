import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

const Subtitle = styled.p`
  font-weight: bold;
`;

const Icon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.5rem;
  display: inline-block;
`;

function TextBox({ leaderIcon, leaderAlt, leaderText, title, subtitle, text }) {
  return (
    <>
      {leaderText && (
        <div className="leader">
          {leaderIcon && (
            <Icon>
              <img loading="lazy" src={leaderIcon} alt={leaderAlt} />
            </Icon>
          )}
          {leaderText}
        </div>
      )}
      {title && <h2>{title}</h2>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {text && <BlockContent blocks={text} />}
    </>
  );
}

TextBox.propTypes = {
  leaderIcon: PropTypes.string,
  leaderAlt: PropTypes.string,
  leaderText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.array,
};

TextBox.defaultProps = {
  leaderIcon: null,
  leaderAlt: null,
  leaderText: null,
  title: null,
  subtitle: null,
  text: null,
};

export default TextBox;
