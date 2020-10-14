import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const DesktopMenu = styled(ListGroup)`
  display: flex;
  @media (max-width: 575.98px) {
    display: none;
  }
`;

function DynlistMenuDesktop({ menu }) {
  const onClickHandler = (slug) => {
    navigate(`/${slug}`);
  };

  return (
    <DesktopMenu>
      {menu.map((item) => {
        return (
          <React.Fragment key={item._key}>
            <ListGroup.Item
              action
              onClick={() => onClickHandler(item.nav.slug.current)}
              bsPrefix="list-group-item dynlist-navItem-tierOne--desktop text-left"
              activeClassName="dynlist-navItem-tierOne--desktop-active"
            >
              {item.label}
            </ListGroup.Item>
            {item.group.map((el) => (
              <ListGroup.Item
                action
                onClick={() => onClickHandler(el.nav.slug.current)}
                bsPrefix="list-group-item dynlist-navItem-tierTwo--desktop text-left"
                key={el._key}
                activeClassName="dynlist-navItem-tierTwo--desktop-active"
              >
                {el.label}
              </ListGroup.Item>
            ))}
          </React.Fragment>
        );
      })}
    </DesktopMenu>
  );
}

DynlistMenuDesktop.propTypes = {};

export default DynlistMenuDesktop;
