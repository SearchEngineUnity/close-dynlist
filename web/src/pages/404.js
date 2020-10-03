import React from 'react';

import Layout from '../containers/layout';
// import SEO from "../containers/seo"

const NotFoundPage = () => (
  <div className="404.html">
    <Layout>
      <section className="section section--last">
        <div className="gradient-background--top gradient-background--error-page" />
        <div className="container">
          <div className="error-code text--center">404</div>
          <h3 className="text--center">Page not found</h3>
          <div className="error-message text--center">
            <p>
              The page you’re looking for seems to have moved or doesn’t exist. Use the navigation
              above to leave this page while we’re tracking down what went wrong.
            </p>
            <p>
              Got questions?{' '}
              <a href="tel:+18552567346" title="+1-855-256-7346" className="link--blue">
                +1-855-CLOSEIO
              </a>{' '}
              and we’ll help you out.
            </p>
          </div>
          <div className="text--center">
            <a href="https://close.com" className="button button--white button--regular">
              Go to homepage
            </a>
          </div>
        </div>
      </section>
    </Layout>
  </div>
);

export default NotFoundPage;
