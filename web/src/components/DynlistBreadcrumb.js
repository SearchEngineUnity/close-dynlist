import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

const ListItem = styled.li``;

function DynlistBreadcrumb({ breadcrumb }) {
  return (
    <nav aria-label="quotes dynamic list breadcrumb">
      <ol className="dynlist-breadcrumb">
        {breadcrumb.map((crumb, index) => {
          if (index === breadcrumb.length - 1) {
            return (
              <li className="dynlist-breadcrumbItem dynlist-breadcrumbItem-active" key={crumb._key}>
                {crumb.label}
              </li>
            );
          }

          return (
            <li key={crumb._key} className="dynlist-breadcrumbItem">
              <Link to={crumb.nav.slug.current === '/' ? '/' : `/${crumb.nav.slug.current}`}>
                {crumb.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

DynlistBreadcrumb.propTypes = {};

export default DynlistBreadcrumb;
