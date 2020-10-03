import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeroBlock from './HeroBlock';
import ImageBlock from './ImageBlock';
import CfFormBlock from './CfFormBlock';
import {
  mapHeroBlockToProps,
  mapImageBlockToProps,
  mapCfFormBlockToProps,
} from '../lib/mapToProps';

function LrSegment({ layout, blocks, sectionStyle }) {
  const colArr = layout.split(':').map((el) => parseInt(el, 10));
  const colDivisor = colArr[0] + colArr[1];
  const colCalculator = (dividen, divisor) => {
    switch (divisor) {
      case 2:
        return 'col-6';

      case 3:
        if (dividen === 1) {
          return 'col-lg-4 col-md-6 col-12';
        }
        return 'col-lg-8 col-md-6 col-12';

      case 4:
        if (dividen === 1) {
          return 'col-lg-3 col-md-6 col-12';
        }
        return 'col-lg-9 col-md-6 col-12';

      case 12:
        switch (dividen) {
          case 7:
            return 'col-lg-7 col-md-6 col-12';
          case 5:
            return 'col-lg-5 col-md-6 col-12';

          default:
            console.log('invalid dividen');
            return null;
        }
      default:
        console.log('calculator missing');
        return null;
    }
  };

  return (
    <section className={sectionStyle}>
      <div className="container">
        <Row style={{ alignItems: 'center' }}>
          {blocks.map((block, index) => {
            const { _type } = block;
            const col = colCalculator(colArr[index], colDivisor);
            switch (_type) {
              case 'hero':
                return <HeroBlock {...mapHeroBlockToProps(col, block)} key={block._key} />;

              case 'illustration':
                return <ImageBlock {...mapImageBlockToProps(col, block)} key={block._key} />;

              case 'cfForm':
                return <CfFormBlock {...mapCfFormBlockToProps(col, block)} key={block._key} />;

              default:
                return <div key="default"> LR block still under development</div>;
            }
          })}
        </Row>
      </div>
    </section>
  );
}

LrSegment.propTypes = {
  layout: PropTypes.string.isRequired,
  sectionStyle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  blocks: PropTypes.array.isRequired,
};

export default LrSegment;
