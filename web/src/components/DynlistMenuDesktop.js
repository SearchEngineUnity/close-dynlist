import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

function DynlistMenuDesktop({ menu }) {
  const onClickHandler = (slug) => {
    navigate(`/${slug}`);
  };

  return (
    <ListGroup>
      {menu.map((item) => {
        return (
          <>
            <ListGroup.Item
              action
              onClick={() => onClickHandler(item.nav.slug.current)}
              bsPrefix="list-group-item dynlist-navItem-tierOne--desktop text-left"
              key={item._key}
            >
              {item.label.name}
            </ListGroup.Item>
            {item.group.map((el) => (
              <ListGroup.Item
                action
                onClick={() => onClickHandler(el.nav.slug.current)}
                bsPrefix="list-group-item dynlist-navItem-tierTwo--desktop text-left"
                key={el._key}
              >
                {el.label.name}
              </ListGroup.Item>
            ))}
          </>
        );
      })}
    </ListGroup>
  );
}

DynlistMenuDesktop.propTypes = {};

export default DynlistMenuDesktop;
