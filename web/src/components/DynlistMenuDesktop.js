import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import { Location } from '@reach/router';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import classNames from 'classnames';

const DesktopMenu = styled.nav`
  @media (max-width: 575.98px) {
    display: none;
  }
`;

function DynlistMenuDesktop({ menu }) {
  const onClickHandler = (slug) => {
    navigate(`/quotes/${slug}/`);
  };

  return (
    <Location>
      {({ location }) => {
        return (
          <DesktopMenu className="list-group" aria-label="Navigation for quotes categories">
            {menu.map((item) => {
              const isActiveCategorySet = `/quotes/${item.nav.slug.current}/` === location.pathname;
              return (
                <React.Fragment key={item._key}>
                  <Link
                    to={`/quotes/${item.nav.slug.current}/`}
                    // onClick={() => onClickHandler(item.nav.slug.current)}
                    className={classNames('dynlist-navItem-tierOne--desktop', 'text-left', {
                      active: isActiveCategorySet,
                    })}
                  >
                    {item.label}
                  </Link>
                  {item.group.map((el) => {
                    const isActiveCategory =
                      `/quotes/${el.nav.slug.current}/` === location.pathname;
                    return (
                      <Link
                        to={`/quotes/${el.nav.slug.current}/`}
                        // onClick={() => onClickHandler(el.nav.slug.current)}
                        className={classNames('dynlist-navItem-tierTwo--desktop', 'text-left', {
                          active: isActiveCategory,
                        })}
                        key={el._key}
                      >
                        {el.label}
                      </Link>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </DesktopMenu>
        );
      }}
    </Location>
  );
}

DynlistMenuDesktop.propTypes = {};

export default DynlistMenuDesktop;
