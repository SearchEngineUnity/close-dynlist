import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

function DynlistBreadcrumb({ breadcrumb }) {
  return (
    <ul>
      {breadcrumb.map((crumb, index) => {
        return (
          // eslint-disable-next-line
          <li key={`${crumb}-${index}`}>
            <Link to={`/${crumb.slug.current}`}>
              {crumb.label} <span> / </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

DynlistBreadcrumb.propTypes = {};

export default DynlistBreadcrumb;
