/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import Layout from '../containers/layout';
// import SEO from "../containers/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="gradient-background--top" />
    <section className="section">
      <div className="container">
        <div className="feature-block feature-block--split">
          <div className="feature-block__left">
            <div className="feature-block__text" style={{ paddingLeft: '0px' }}>
              <div className="feature-block__text-group">
                <div className="product-block__label" style={{ backgroundColor: 'transparent' }}>
                  Sales Motivation
                </div>
                <h1 style={{ fontWeight: '400' }}>
                  221 sales motivation quotes to help you close more deals
                </h1>
                <p className="text--large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat ornare
                  eleifend. Quisque dignissim bibendum odio, ac ornare lectus tempus.{' '}
                </p>
                <br />
                <p>
                  Videos created by <strong>Steli Efti</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="feature-block__right feature-block__right--narrow">
            <div className="feature-block__text">
              <div className="cf-cta-snippet cta67610" website-id="18223" cta-id="67610" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--last" id="native-integrations">
      <div className="container">
        <div className="integrations">
          <div className="integrations__sidebar">
            <ul className="integrations__menu">
              <li className="integrations__menu-item">
                <div className="integrations__category active" data-filter="all">
                  All integrations
                </div>
              </li>
              <li className="integrations__menu-item">
                <div className="integrations__category" data-filter="communication">
                  Communication
                </div>
              </li>
              <li className="integrations__menu-item">
                <div className="integrations__category" data-filter="prospecting">
                  Prospecting
                </div>
              </li>
              <li className="integrations__menu-item">
                <div className="integrations__category" data-filter="marketing">
                  Marketing
                </div>
              </li>
              <li className="integrations__menu-item">
                <div className="integrations__category" data-filter="analysis-and-reporting">
                  Analysis &amp; Reporting
                </div>
              </li>
              <li className="integrations__menu-item">
                <div className="integrations__category" data-filter="organizational-tools">
                  Organizational Tools
                </div>
              </li>
              <li className="integrations__menu-item">
                <div className="integrations__category" data-filter="data-and-backup">
                  Data &amp; Backup
                </div>
              </li>
            </ul>
          </div>
          <div className="integrations__list">
            <div
              className="integrations__item integrationrollover text--center"
              data-category="communication"
              style={{ position: 'relative' }}
            >
              <a href="https://close.com/integrations/zoom">
                <div className="integration__logo">
                  <img
                    src="https://close.com/static/img/api/zoom-logo-mark.png?h=87ee073c"
                    alt=""
                    width="56"
                    height="56"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '0px',
                      padding: '5px 10px 5px',
                      top: '10px',
                      borderRadius: '5px 0px 0px 5px',
                      fontSize: '12px',
                      backgrounColor: '#F3F4F7',
                      color: '#3e444e',
                    }}
                  >
                    Featured
                  </span>
                </div>
                <h4 className="integration__name">Zoom</h4>
                <div className="integration__description text--small">Video Conferencing</div>
              </a>
            </div>
            <div
              className="integrations__item integrationrollover text--center"
              data-category="communication"
              style={{ position: 'relative' }}
            >
              <a href="https://close.com/integrations/slack">
                <div className="integration__logo">
                  <img
                    src="https://close.com/static/img/api/slack-logo-mark.svg?h=fbfe1750"
                    alt=""
                    width="56"
                    height="56"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '0px',
                      padding: '5px 10px 5px',
                      top: '10px',
                      borderRadius: '5px 0px 0px 5px',
                      fontSize: '12px',
                      backgrounColor: '#F3F4F7',
                      color: '#3e444e',
                    }}
                  >
                    Featured
                  </span>
                </div>
                <h4 className="integration__name">Slack</h4>
                <div className="integration__description text--small">Messaging Platform</div>
              </a>
            </div>
            <div
              className="integrations__item integrationrollover text--center"
              data-category="communication"
              style={{ position: 'relative' }}
            >
              <a href="https://close.com/integrations/help-scout">
                <div className="integration__logo">
                  <img
                    src="https://close.com/static/img/api/helpscout-logo-mark.svg?h=d09ab37b"
                    alt=""
                    width="47"
                    height="56"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '0px',
                      padding: '5px 10px 5px',
                      top: '10px',
                      borderRadius: '5px 0px 0px 5px',
                      fontSize: '12px',
                      backgrounColor: '#F3F4F7',
                      color: '#3e444e',
                    }}
                  >
                    Featured
                  </span>
                </div>
                <h4 className="integration__name">Help Scout</h4>
                <div className="integration__description text--small">Customer Messaging</div>
              </a>
            </div>

            <div
              className="integrations__item integrationrollover text--center"
              data-category="communication"
            >
              <a href="https://close.com/integrations/zendesk">
                <div className="integration__logo">
                  <img
                    src="https://close.com/static/img/api/zendesk-logo-mark.svg?h=230cfdc8"
                    alt=""
                    width="63"
                    height="48"
                  />
                </div>
                <h4 className="integration__name">Zendesk</h4>
                <div className="integration__description text--small" data-category="communication">
                  Customer Messaging
                </div>
              </a>
            </div>
            <div
              className="integrations__item integrationrollover text--center"
              data-category="communication"
            >
              <a href="https://close.com/integrations/intercom">
                <div className="integration__logo">
                  <img
                    src="https://close.com/static/img/api/intercom-logo-mark.svg?h=64d45a1e"
                    alt=""
                    width="56"
                    height="56"
                  />
                </div>
                <h4 className="integration__name">Intercom</h4>
                <div className="integration__description text--small">Customer Engagement</div>
              </a>
            </div>
            <div
              className="integrations__item integrationrollover text--center"
              data-category="communication"
            >
              <a href="https://close.com/integrations/drift">
                <div className="integration__logo">
                  <img
                    src="https://close.com/static/img/api/drift-logo-mark.svg?h=b1dbae64"
                    alt=""
                    width="56"
                    height="56"
                  />
                </div>
                <h4 className="integration__name">Drift</h4>
                <div className="integration__description text--small">Conversation Marketing</div>
              </a>
            </div>

            <div
              className="integrations__item integrationrollover text--center"
              data-category="analysis-and-reporting"
            >
              <a href="https://close.com/integrations/smart-reporting">
                <div className="integration__logo">
                  <img
                    src="https://close.com/static/img/integrations/smart-reporting-logo-mark.svg?h=78419ac9"
                    alt="Smart Reporting"
                    height="60"
                  />
                </div>
                <h4 className="integration__name">Smart Reporting</h4>
                <div className="integration__description text--small">
                  Sales Data &amp; Insights
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
