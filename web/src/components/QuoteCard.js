import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';
import quoteMark from '../images/quoteMark.svg';

function QuoteCard({ quote, source, video }) {
  return (
    <Col lg={6} xs={12} className="d-flex align-items-stretch">
      <Card
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: '2px 2px 6px #00000029',
          borderRadius: '4px',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
        className="w-100"
      >
        <div style={{ flex: '1' }}>
          <p style={{ paddingBottom: '1rem' }}>{quote}</p>
          <p style={{ color: '#7B85A0', paddingBottom: '1rem', fontSize: '0.875rem' }}>{source}</p>
        </div>
        <a
          href={video}
          target="_blank"
          rel="noreferrer"
          className="button button--regular button--primary button--special"
          style={{ width: '140px' }}
        >
          Watch Video
        </a>

        <img
          src={quoteMark}
          alt="quotation mark"
          width="50px"
          height="auto"
          style={{ position: 'absolute', bottom: '32px', right: '32px' }}
        />
      </Card>
    </Col>
  );
}

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

export default QuoteCard;
