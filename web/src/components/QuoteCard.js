import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Button } from 'react-bootstrap';

function QuoteCard({ quote, source, video }) {
  return (
    <Col md={6} xs={12} className="d-flex align-items-stretch">
      <Card
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: '2px 2px 6px #00000029',
          borderRadius: '4px',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="w-100"
      >
        <div style={{ flex: '1' }}>
          <p style={{ paddingBottom: '1rem' }}>{quote}</p>
          <p style={{ color: '#7B85A0', paddingBottom: '1rem', fontSize: '0.875rem' }}>{source}</p>
        </div>
        <a href={video} target="_blank" rel="noreferrer">
          <Button style={{ backgroundColor: '#4364AF', borderColor: '#4364AF' }}>
            Watch Video
          </Button>
        </a>
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
