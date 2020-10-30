import React from 'react';

function MainFooter() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__menus">
            <div className="footer__menu footer__menu--company">
              <img
                className="logo"
                src="https://close.com/static/img/close-logo-light.svg?h=85d62fef"
                alt="Close"
                width="124"
                height="32"
              />
              <div className="footer__copyright">© 2020 Elastic Inc</div>
            </div>
            <div className="footer__menu">
              <h4 className="footer__heading">Meet Your New CRM</h4>
              <a href="https://close.com/pricing/" className="footer__link">
                Pricing
              </a>
              <a href="https://close.com/product/" className="footer__link">
                Overview
              </a>
              <a href="https://close.com/calling/" className="footer__link">
                Calling
              </a>
              <a href="https://close.com/calling/power-dialer/" className="footer__link">
                Power Dialer
              </a>
              <a href="https://close.com/calling/predictive-dialer/" className="footer__link">
                Predictive Dialer
              </a>
              <a href="https://close.com/emailing/" className="footer__link">
                Emailing
              </a>
              <a href="https://close.com/emailing/sequences/" className="footer__link">
                Email Automation
              </a>
              <a href="https://close.com/sms/" className="footer__link">
                SMS
              </a>
              <a href="https://close.com/pipeline/" className="footer__link">
                Pipeline View <span className="new-label">New</span>
              </a>
              <a href="https://close.com/search/" className="footer__link">
                Search &amp; Smart Views
              </a>
              <a href="https://close.com/reporting/" className="footer__link">
                Sales Reporting &amp; Leaderboard
              </a>
              <a href="https://close.com/integrations" className="footer__link">
                CRM Integrations
              </a>
              <a href="https://close.com/api/" className="footer__link">
                Close API Overview
              </a>
              <a href="https://close.com/plans/starter/" className="footer__link">
                Close Starter Plan <span className="new-label">New</span>
              </a>
            </div>
            <div className="footer__menu">
              <h4 className="footer__heading">Sales Tips &amp; Resources</h4>
              <a href="https://blog.close.com" className="footer__link">
                Close Sales Blog
              </a>
              <a href="https://close.com/compare/" className="footer__link">
                Close vs other CRMs
              </a>
              <a href="https://close.com/resources/" className="footer__link">
                Free Sales Resources
              </a>
              <a href="https://close.com/newsletter/" className="footer__link">
                Weekly Sales Newsletter
              </a>
              <a href="https://close.com/free-sales-course/" className="footer__link">
                Email Sales Course
              </a>
              <a href="https://close.com/webinars/" className="footer__link">
                Webinars
              </a>
              <a href="https://close.com/crm/crm-software/" className="footer__link">
                What is CRM software?
              </a>
              <a href="https://close.com/crm/predictive-dialer/" className="footer__link">
                What is a Predictive Dialer?
              </a>
              <a href="https://close.com/crm/crm-training/" className="footer__link">
                CRM Training Resources
              </a>
            </div>
            <div className="footer__menu">
              <h4 className="footer__heading">Get to Know Us</h4>
              <a href="https://close.com/about/" className="footer__link">
                About
              </a>
              <a href="https://close.com/customers/" className="footer__link">
                Customer Stories
              </a>
              <a href="https://jobs.close.com/" className="footer__link">
                Join Our Team
              </a>
              <a href="https://close.com/partners/" className="footer__link">
                Close Partner Program
              </a>
              <a href="https://close.com/events/" className="footer__link">
                Events
              </a>
              <a href="https://close.com/brand/" className="footer__link">
                Brand Guidelines
              </a>
              <a href="https://close.com/tos/" className="footer__link">
                Terms
              </a>
              <a href="https://close.com/privacy/" className="footer__link">
                Privacy
              </a>
              <a href="https://close.com/gdpr/" className="footer__link">
                GDPR
              </a>
              <a href="https://close.com/ccpa/" className="footer__link">
                CCPA
              </a>
            </div>
            <div className="footer__menu">
              <h4 className="footer__heading">Get help</h4>
              <a href="tel:+18334625673" className="footer__link">
                +1-833-GO-CLOSE
              </a>
              <a href="mailto:sales@close.com" className="footer__link">
                Email Sales
              </a>
              <a href="mailto:support@close.com" className="footer__link">
                Email Support
              </a>
              <a href="https://help.close.com" className="footer__link">
                Support Documentation
              </a>
              <a href="https://developer.close.com" className="footer__link">
                API Documentation
              </a>
              <a href="https://app.close.com/download/" className="footer__link">
                Download Application
              </a>
              <a href="https://close.com/changelog/" className="footer__link">
                Product Updates
              </a>
              <a href="https://status.close.com/" className="footer__link">
                System Status
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__social">
            <a href="https://www.facebook.com/close.io" className="footer__social-link">
              <img
                src="https://close.com/static/img/icons/social-facebook.svg?h=edb73f78"
                alt=""
                width="22"
                height="22"
              />
            </a>
            <a href="https://twitter.com/close" className="footer__social-link">
              <img
                src="https://close.com/static/img/icons/social-twitter.svg?h=1556ac0a"
                alt=""
                width="23"
                height="19"
              />
            </a>
            <a href="https://www.youtube.com/user/closeio" className="footer__social-link">
              <img
                src="https://close.com/static/img/icons/social-youtube.svg?h=d2caec56"
                alt=""
                width="26"
                height="18"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default MainFooter;
