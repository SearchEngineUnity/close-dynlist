import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function Welcome() {
  return (
    <a href="https://blog.close.com/user-groups/">
      <div className="announcement-banner announcement-banner--brand-cyan">
        <div className="container">
          <span className="announcement-banner__message">
            <strong>NEW: </strong>Organize your team in Close with Groups →
          </span>
        </div>
      </div>
    </a>
  );
}

export default Welcome;
