import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

function DynlistMenuMobile({ menu }) {
  console.log(menu);

  const onClickHandler = (slug) => {
    navigate(`/${slug}`);
  };

  return (
    <ListGroup as="ul">
      {menu.map((item) => {
        return (
          <>
            <i className={menu} />
            <ListGroup.Item
              as="li"
              active
              action
              onClick={() => onClickHandler(item.nav.slug.current)}
              key={item._key}
            >
              {item.label.name}
              {}
            </ListGroup.Item>
            {item.group.map((el) => (
              <ListGroup.Item
                action
                onClick={() => onClickHandler(el.nav.slug.current)}
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

DynlistMenuMobile.propTypes = {};

export default DynlistMenuMobile;
