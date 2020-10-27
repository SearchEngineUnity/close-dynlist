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
        <link
          href="https://fonts.googleapis.com/css?family=Caveat&amp;display=swap"
          rel="reload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Caveat&amp;display=swap"
          rel="stylesheet"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css?family=Kalam&amp;display=swap"
          rel="reload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Kalam&amp;display=swap"
          rel="stylesheet"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css?family=Itim&amp;display=swap"
          rel="reload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Itim&amp;display=swap"
          rel="stylesheet"
          crossOrigin
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
        <link rel="preload" type="text/css" href={withPrefix('globalStyle.css')} as="style" />
      </Helmet>
      <MainNav />
      <>{children}</>
      <MainFooter />
      <Helmet>
        <link rel="stylesheet" href="https://close.com/static/dist/style.min.css?h=f48dda9a" />
        <link rel="stylesheet" type="text/css" href={withPrefix('globalStyle.css')} />
      </Helmet>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
