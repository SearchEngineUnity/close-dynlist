import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Fab } from 'react-tiny-fab';
import { Accordion, Card } from 'react-bootstrap';
import styled from 'styled-components';

const MobileFab = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`;

// import PropTypes from 'prop-types';

function DynlistMenuMobile({ menu }) {
  const [open, setOpen] = useState(false);
  const onClickHandeler = () => {
    setOpen(!open);
  };
  return (
    <>
      {!open && (
        <MobileFab>
          <Fab
            mainButtonStyles={{
              backgroundColor: 'black',
              color: 'white',
            }}
            icon={<i className="fas fa-filter" />}
            // actionButtonStyles={actionButtonStyles}
            style={{ bottom: 0, right: 0 }}
            event="click"
            // alwaysShowTitle
            onClick={() => onClickHandeler()}
          />
        </MobileFab>
      )}
      {open && (
        <div className="navigation dynlist-nav--mobile">
          <div className="mobile-menu__wrapper">
            <div className="mobile-menu__top">
              <img
                className="logo"
                src="https://close.com/static/img/close-logo-dark.svg?h=0bedac01"
                alt="Close"
                width="100"
                height=""
              />
              <button
                type="button"
                aria-label="close dynamic list menu"
                className="dynlist-nav-close"
                onClick={() => onClickHandeler()}
                style={{ backgroundColor: 'transparent', border: 'none' }}
              />
            </div>
            <div className="mobile-menu mobile-menu--primary">
              {menu.map((categorySet) => {
                return (
                  <Accordion as="div">
                    <Card as="div" bsPrefix="mobile-menu__item mobile-menu__item--primary">
                      <React.Fragment key={categorySet._key}>
                        <Accordion.Toggle
                          as="div"
                          eventKey={categorySet._key}
                          className="mobile-menu__link mobile-menu__link--expandable"
                        >
                          {categorySet.label}
                        </Accordion.Toggle>
                        <Accordion.Collapse
                          eventKey={categorySet._key}
                          bsPrefix="mobile-menu mobile-menu--secondary"
                        >
                          <Card.Body className="px-0">
                            {categorySet.group.map((category) => {
                              return (
                                <Link
                                  to={`/${category.nav.slug.current}`}
                                  className="dropdown-item"
                                  key={category._key}
                                >
                                  <div className="dropdown-item__icon text-center">
                                    <i
                                      className={`${category.icon}`}
                                      style={{
                                        color: 'white',
                                        verticalAlign: 'middle',
                                        height: '32px',
                                        lineHeight: '32px',
                                        fontStyle: 'normal',
                                      }}
                                    />
                                  </div>
                                  <div className="dropdown-item__text">
                                    <div className="dropdown-item__title dropdown-item__title--s">
                                      {category.label}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </Card.Body>
                        </Accordion.Collapse>
                      </React.Fragment>
                    </Card>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default DynlistMenuMobile;
