import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextBox from './TextBox';
import ImageBox from './ImageBox';
import { mapTextBoxToProps, mapImageBoxToProps } from '../lib/mapToProps';

const Subtitle = styled.p`
  font-size: 1.75rem;
`;

const PaddedRow = styled(Row)`
  margin: 0 -15px 3rem -15px;
`;

const PaddedCol = styled(Col)`
  @media screen and (max-width: 991px) {
    margin-bottom: 1rem;
  }
`;

function LrTextImage({ id, title, subtitle, order, textDesign, set }) {
  return (
    <Container id={id} as="section">
      {title && <h2 className="text-center">{title}</h2>}
      {subtitle && <Subtitle className="text-center">{subtitle}</Subtitle>}

      {set.map((el, index) => {
        if ((!order && (index === 0 || index % 2 === 0)) || (order && index % 2 !== 0)) {
          return (
            <PaddedRow key={el._key}>
              <PaddedCol lg="6" xs="12">
                <TextBox {...mapTextBoxToProps(el.textBox)} />
              </PaddedCol>
              <PaddedCol lg="6" xs="12">
                <ImageBox {...mapImageBoxToProps(el.imageBox)} />
              </PaddedCol>
            </PaddedRow>
          );
        }
        return (
          <PaddedRow key={el._key}>
            <PaddedCol lg={{ order: 'first', span: 6 }} xs={{ order: 'last', span: 12 }}>
              <ImageBox {...mapImageBoxToProps(el.imageBox)} />
            </PaddedCol>
            <PaddedCol lg={{ order: 'last', span: 6 }} xs={{ order: 'first', span: 12 }}>
              <TextBox {...mapTextBoxToProps(el.textBox)} />
            </PaddedCol>
          </PaddedRow>
        );
      })}
    </Container>
  );
}

LrTextImage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  order: PropTypes.bool.isRequired,
  textDesign: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  set: PropTypes.array.isRequired,
};

LrTextImage.defaultProps = {
  title: null,
  subtitle: null,
};

export default LrTextImage;
