import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Location } from '@reach/router';

const MobileNav = styled.nav`
  display: flex;
  @media (min-width: 576px) {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  @media (max-width: 575.98px) {
    display: none;
  }
`;

function DynlistBreadcrumb({ breadcrumb }) {
  return (
    <>
      <DesktopNav aria-label="quotes menu breadcrumb">
        <ol className="dynlist-breadcrumb">
          {breadcrumb.map((crumb, index) => {
            if (index === breadcrumb.length - 1) {
              return (
                <li className="dynlist-breadcrumbItem active" key={crumb._key}>
                  {crumb.label}
                </li>
              );
            }

            return (
              <React.Fragment key={crumb._key}>
                <li className="dynlist-breadcrumbItem">
                  <Link to={crumb.nav.slug.current === '/' ? '/' : `/${crumb.nav.slug.current}`}>
                    {crumb.label}
                  </Link>
                </li>
                <span className="dynlist-bradcrumbItem-seperator">/</span>
              </React.Fragment>
            );
          })}
        </ol>
      </DesktopNav>
      <MobileNav aria-label="quotes menu breadcrumb">
        <ol className="dynlist-breadcrumb">
          {breadcrumb.map((crumb, index) => {
            if (index === breadcrumb.length - 1) {
              return (
                <li className="dynlist-breadcrumbItem active" key={crumb._key}>
                  {crumb.shortLabel}
                </li>
              );
            }

            return (
              <React.Fragment key={crumb._key}>
                <li className="dynlist-breadcrumbItem">
                  <Link to={crumb.nav.slug.current === '/' ? '/' : `/${crumb.nav.slug.current}`}>
                    {crumb.shortLabel}
                  </Link>
                </li>
                <span className="dynlist-bradcrumbItem-seperator">/</span>
              </React.Fragment>
            );
          })}
        </ol>
      </MobileNav>
      {/* <Location>
        {({ location }) => {
          if (location.pathname === '/') {
            return (
              <MobileNav aria-label="quotes menu breadcrumb">
                <ol className="dynlist-breadcrumb">
                  <li className="dynlist-breadcrumbItem-active">{breadcrumb[0].label}</li>
                </ol>
              </MobileNav>
            );
          }
          return (
            <MobileNav aria-label="quotes dynamic list breadcrumb">
              <ol className="dynlist-breadcrumb">
                <li className="dynlist-breadcrumbItem-mobile">
                  <Link
                    to={
                      breadcrumb[breadcrumb.length - 2].nav.slug.current === '/'
                        ? '/'
                        : `/${breadcrumb[breadcrumb.length - 2].nav.slug.current}`
                    }
                  >
                    {breadcrumb[breadcrumb.length - 2].label}
                  </Link>
                </li>
              </ol>
            </MobileNav>
          );
        }}
      </Location> */}
    </>
  );
}

DynlistBreadcrumb.propTypes = {};

export default DynlistBreadcrumb;
