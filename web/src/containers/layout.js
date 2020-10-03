/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Welcome from '../components/Welcome';
import MainFooter from '../components/MainFooter';
import MainNav from '../components/MainNav';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Caveat&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Caveat&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Kalam&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Itim&amp;display=swap"
          rel="stylesheet"
        />
        <script src="https://js.convertflow.co/production/websites/18223.js" async />
        {/* <link rel="stylesheet" type="text/css" href={withPrefix('closeOriginal.css')} /> */}
        {/* <script type="text/javascript" src={withPrefix('closeOriginal.js')} /> */}
        <link rel="stylesheet" href="https://close.com/static/dist/style.min.css?h=f48dda9a" />
        <link rel="stylesheet" type="text/css" href={withPrefix('globalStyle.css')} />
        <script src="https://close.com/static/dist/scripts.min.js?h=b3f57533" />
      </Helmet>
      <Welcome />
      <MainNav />
      <>{children}</>
      <MainFooter />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
