import React, { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Link } from 'gatsby';
import { Fab, Action } from 'react-tiny-fab';
import { Accordion, Card } from 'react-bootstrap';
import styled from 'styled-components';
import CustomToggle from './DynlistMenuMobileToggle';

const MobileFab = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`;

// import PropTypes from 'prop-types';

function DynlistMenuMobile({ menu }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
      disableBodyScroll(document.documentElement);
    } else {
      document.documentElement.style = null;
      clearAllBodyScrollLocks();
    }
  }, [open]);

  const onFilterClickHandeler = () => {
    setOpen(!open);
  };

  const onClickToTop = () => {
    document.getElementById('dynlistPage').scrollIntoView({ behavior: 'smooth' });
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
            icon={<i className="fas fa-plus" />}
            style={{ bottom: 0, right: 0 }}
            alwaysShowTitle
            event="click"
          >
            <Action
              text="Filter"
              onClick={onFilterClickHandeler}
              style={{ backgroundColor: '#4364AF' }}
            >
              <i className="fas fa-filter" />
            </Action>
            <Action
              text="Back to Top"
              onClick={onClickToTop}
              style={{ backgroundColor: '#4364AF' }}
            >
              <i className="fas fa-angle-double-up" />
            </Action>
          </Fab>
        </MobileFab>
      )}
      {open && (
        <nav
          className="navigation dynlist-nav--mobile"
          aria-label="Navigation for quotes categories"
        >
          <div className="mobile-menu__wrapper">
            <div className="mobile-menu__top">
              <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Filter by Category</span>
              <button
                type="button"
                aria-label="close dynamic list menu"
                className="dynlist-nav-close"
                onClick={onFilterClickHandeler}
                style={{ backgroundColor: 'transparent', border: 'none' }}
              />
            </div>
            <div className="mobile-menu mobile-menu--primary">
              {menu.map((categorySet) => {
                console.log(`categoryset key: ${categorySet._key}`);
                return (
                  <Accordion as="div" key={categorySet._key}>
                    <Card as="div" bsPrefix="mobile-menu__item mobile-menu__item--primary">
                      <>
                        <CustomToggle eventKey={categorySet._key} label={categorySet.label} />
                        <Accordion.Collapse
                          eventKey={categorySet._key}
                          bsprefix="mobile-menu mobile-menu--secondary"
                        >
                          <Card.Body className="px-0">
                            {categorySet.group.map((category) => {
                              console.log(`category key: ${category._key}`);
                              return (
                                <Link
                                  to={`/quotes/${category.nav.slug.current}/`}
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
                      </>
                    </Card>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
export default DynlistMenuMobile;
