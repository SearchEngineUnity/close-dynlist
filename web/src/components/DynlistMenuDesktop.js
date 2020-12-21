import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

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
                  <ListGroup.Item
                    action
                    onClick={() => onClickHandler(item.nav.slug.current)}
                    bsPrefix="dynlist-navItem-tierOne--desktop text-left"
                    active={isActiveCategorySet}
                  >
                    {item.label}
                  </ListGroup.Item>
                  {item.group.map((el) => {
                    const isActiveCategory =
                      `/quotes/${el.nav.slug.current}/` === location.pathname;
                    return (
                      <ListGroup.Item
                        action
                        onClick={() => onClickHandler(el.nav.slug.current)}
                        bsPrefix="dynlist-navItem-tierTwo--desktop text-left"
                        key={el._key}
                        active={isActiveCategory}
                      >
                        {el.label}
                      </ListGroup.Item>
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
