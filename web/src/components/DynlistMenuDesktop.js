import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

function DynlistMenuDesktop({ menu }) {
  console.log(menu);
  return (
    <ListGroup>
      {menu.map((item) => {
        return (
          <>
            <Link to={`/${item.nav.slug.current}`}>
              <ListGroup.Item
                action
                style={{
                  backgroundColor: '#555863',
                  border: '2px solid #F8F9FB',
                  borderRadius: '4px 4px 0px 0px',
                  color: '#FFFFFF',
                }}
              >
                {item.label.name}
              </ListGroup.Item>
            </Link>
            {item.group.map((el) => (
              <Link to={`/${el.nav.slug.current}`}>
                <ListGroup.Item
                  action
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #F8F9FB',
                    borderRadius: '4px 4px 0px 0px',
                    color: '#3E444E',
                  }}
                >
                  {el.label.name}
                </ListGroup.Item>
              </Link>
            ))}
          </>
        );
      })}
    </ListGroup>
  );
}

DynlistMenuDesktop.propTypes = {};

export default DynlistMenuDesktop;
