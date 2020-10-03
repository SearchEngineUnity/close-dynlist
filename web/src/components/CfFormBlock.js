import React from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

function CfForm({ col, className, ctaId, websiteId }) {
  return (
    <div className={col}>
      {/* <div className="cf-cta-snippet cta67610" website-id="18223" cta-id="67610" /> */}
      <div className={className} website-id={websiteId} cta-id={ctaId} />
    </div>
  );
}

CfForm.propTypes = {
  col: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  ctaId: PropTypes.string.isRequired,
  websiteId: PropTypes.string.isRequired,
};

export default CfForm;
