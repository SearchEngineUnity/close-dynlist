import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const DesktopMenu = styled.nav`
  @media (max-width: 575.98px) {
    display: none;
  }
`;

function DynlistMenuDesktop({ menu }) {
  return (
    <DesktopMenu className="list-group" aria-label="Navigation for quotes categories">
      {menu.map((item) => {
        return (
          <React.Fragment key={item._key}>
            <Link
              to={`/quotes/${item.nav.slug.current}/`}
              // onClick={() => onClickHandler(item.nav.slug.current)}
              className="dynlist-navItem-tierOne--desktop text-left"
              activeClassName="active"
            >
              {item.label}
            </Link>
            {item.group.map((el) => {
              return (
                <Link
                  to={`/quotes/${el.nav.slug.current}/`}
                  // onClick={() => onClickHandler(el.nav.slug.current)}
                  className="dynlist-navItem-tierTwo--desktop text-left"
                  key={el._key}
                  activeClassName="active"
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
}

DynlistMenuDesktop.propTypes = {};

export default DynlistMenuDesktop;
