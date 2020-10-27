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
import MainFooter from '../components/MainFooter';
import MainNav from '../components/MainNav';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          rel="preload"
          src="https://kit.fontawesome.com/e4a269ffa7.js"
          crossOrigin="anonymous"
          async
        />
        <script />
        <link
          rel="preload"
          href="https://close.com/static/dist/style.min.css?h=f48dda9a"
          as="style"
        />
        <link rel="stylesheet" href="https://close.com/static/dist/style.min.css?h=f48dda9a" />
        <link rel="preload" type="text/css" href={withPrefix('globalStyle.css')} as="style" />
        <link rel="stylesheet" type="text/css" href={withPrefix('globalStyle.css')} />
      </Helmet>
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
