import React, { useState } from 'react';

function MainNav() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
            <a href="https://close.com/" className="header__logo">
              <img
                className="logo"
                src="https://close.com/static/img/close-logo-dark.svg?h=0bedac01"
                alt="Close"
                width="124"
                height="32"
              />
            </a>
            <nav className="navigation navigation--primary">
              <div className="navigation__item navigation__item--has-dropdown">
                <div className="navigation__link">Product</div>
                <div className="dropdown-menu dropdown-menu--product on">
                  <div className="dropdown-menu__section">
                    <div className="dropdown-menu__heading">Your Sales Workflow</div>
                    <a href="https://close.com/product/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-transparent.svg?h=d5cd4e83"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Overview</div>
                        <div className="dropdown-item__description">The high performance CRM</div>
                      </div>
                    </a>
                    <a href="https://close.com/outreach-at-scale/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-sell-transparent.svg?h=1c11ad7c"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Sell</div>
                        <div className="dropdown-item__description">Get more from every lead</div>
                      </div>
                    </a>
                    <a href="https://close.com/sales-workflow/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-optimize-transparent.svg?h=655e5861"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Optimize</div>
                        <div className="dropdown-item__description">
                          Streamline your sales process
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/pipeline-management/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-grow-transparent.svg?h=b1a97a46"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Grow</div>
                        <div className="dropdown-item__description">Keep your pipeline growing</div>
                      </div>
                    </a>
                    <a href="https://close.com/team-collaboration/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-collaborate-transparent.svg?h=edbeb8c7"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Collaborate</div>
                        <div className="dropdown-item__description">
                          Grow your sales pipeline as a team
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/integrations" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-integrations-transparent.svg?h=05d0077c"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Integrate</div>
                        <div className="dropdown-item__description">
                          Connect Close to your favorite tools
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-menu__section">
                    <div className="dropdown-menu__heading">Sales Communication</div>
                    <a href="https://close.com/calling/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-menu-calling-transparent.svg?h=434c1b5e"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Calling</div>
                        <div className="dropdown-item__description">
                          Make more calls with built-in VoIP
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/emailing/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-menu-emailing-transparent.svg?h=bc3859af"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Emailing</div>
                        <div className="dropdown-item__description">
                          Break through the noise with emails that sell
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/sms/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-menu-sms-transparent.svg?h=45422623"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">SMS</div>
                        <div className="dropdown-item__description">
                          Increase reach rates with built-in SMS
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/zoom/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-menu-video-transparent.svg?h=e65c2c35"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Video</div>
                        <div className="dropdown-item__description">
                          Run and track video calls from within your CRM
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="navigation__item navigation__item--has-dropdown">
                <div className="navigation__link">Solutions</div>
                <div className="dropdown-menu dropdown-menu--solutions on">
                  <div className="dropdown-menu__section dropdown-menu__section--full">
                    <a href="https://close.com/inbound-sales/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-menu-inbound-transparent.svg?h=d8738d1f"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Inbound Sales</div>
                        <div className="dropdown-item__description">
                          Turn more inbound leads into sales dollars
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/outbound-sales/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-menu-outbound-transparent.svg?h=e2daa2f5"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Outbound Sales</div>
                        <div className="dropdown-item__description">Get more from every lead</div>
                      </div>
                    </a>
                    <a href="https://close.com/remote-work/" className="dropdown-item">
                      <div className="dropdown-item__icon">
                        <img
                          src="https://close.com/static/img/icons/icon-product-menu-remote-transparent.svg?h=d75a29f5"
                          alt=""
                        />
                      </div>
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Remote Sales</div>
                        <div className="dropdown-item__description">
                          Make remote work your sales team’s advantage
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="navigation__item">
                <a href="https://close.com/pricing/" className="navigation__link">
                  Pricing
                </a>
              </div>
              <div className="navigation__item">
                <a href="https://blog.close.com" className="navigation__link">
                  Blog
                </a>
              </div>
              <div className="navigation__item navigation__item--has-dropdown">
                <div className="navigation__link">Free Resources</div>
                <div className="dropdown-menu dropdown-menu--resources on">
                  <div className="dropdown-menu__section dropdown-menu__section--full">
                    <a href="https://close.com/resources/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Sales Resource Library</div>
                        <div className="dropdown-item__description">
                          All the best resources to make you and your sales team a force to be
                          reckoned with!
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://close.com/resources/startup-sales-resource-bundle/"
                      className="dropdown-item"
                    >
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Startup Sales Bundle</div>
                        <div className="dropdown-item__description">
                          Books, email templates, checklists, sales scripts and much more
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/sales-motivation/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">
                          Daily Sales Motivation <span className="new-label">New</span>
                        </div>
                        <div className="dropdown-item__description">
                          A new 60 second sales motivation video every day. An inspiring quote and a
                          quick action item to crush your day.
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/free-sales-course/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Email Sales Course</div>
                        <div className="dropdown-item__description">
                          Create a predictable &amp; repeatable sales model for your company in 30
                          days.
                        </div>
                      </div>
                    </a>
                    <a href="https://close.com/newsletter/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Weekly Sales Newsletter</div>
                        <div className="dropdown-item__description">
                          Get actionable sales advice read by over 200,000 sales professionals every
                          week.
                        </div>
                      </div>
                    </a>
                    <a href="https://help.close.com/docs/welcome-1" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Product Guide</div>
                        <div className="dropdown-item__description">
                          Learn how to use Close to increase efficiency and close more deals in less
                          time.
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="navigation__item navigation__item--has-dropdown">
                <div className="navigation__link">About</div>
                <div className="dropdown-menu dropdown-menu--about on">
                  <div className="dropdown-menu__section dropdown-menu__section--full">
                    <a href="https://close.com/about/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">About Close</div>
                      </div>
                    </a>
                    <a href="https://close.com/customers/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Customer Stories</div>
                      </div>
                    </a>
                    <a href="https://jobs.close.com/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Join Our Team</div>
                      </div>
                    </a>
                    <a href="https://close.com/events/" className="dropdown-item">
                      <div className="dropdown-item__text">
                        <div className="dropdown-item__title">Events</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <nav className="navigation navigation--secondary">
              <div className="navigation__item">
                <a href="https://app.close.com/login/" className="navigation__link">
                  Log in
                </a>
              </div>
              <a
                href="https://app.close.com/signup/"
                className="button button--regular button--primary"
              >
                Try Close
              </a>
            </nav>
            <div className="mobile-nav-trigger" />
          </div>
        </div>
      </header>
      <div className="navigation navigation--mobile">
        <div className="mobile-menu__wrapper">
          <div className="mobile-menu__top">
            <img
              className="logo"
              src="https://close.com/static/img/close-logo-dark.svg?h=0bedac01"
              alt="Close"
              width="100"
              height=""
            />
            <div className="mobile-nav-close" />
          </div>
          <div className="mobile-menu mobile-menu--primary">
            <div className="mobile-menu__item mobile-menu__item--primary">
              <div className="mobile-menu__link mobile-menu__link--primary mobile-menu__link--expandable">
                Product
              </div>
              <div className="mobile-menu mobile-menu--secondary">
                <a href="https://close.com/product/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-product-transparent.svg?h=d5cd4e83"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">Overview</div>
                    <div className="dropdown-item__description">The high performance CRM</div>
                  </div>
                </a>
                <a href="https://close.com/outreach-at-scale/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-sell-transparent.svg?h=1c11ad7c"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">Sell</div>
                    <div className="dropdown-item__description">Get more from every lead</div>
                  </div>
                </a>
                <a href="https://close.com/sales-workflow/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-optimize-transparent.svg?h=655e5861"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">Optimize</div>
                    <div className="dropdown-item__description">Streamline your sales process</div>
                  </div>
                </a>
                <a href="https://close.com/pipeline-management/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-grow-transparent.svg?h=b1a97a46"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">Grow</div>
                    <div className="dropdown-item__description">Keep your pipeline growing</div>
                  </div>
                </a>
                <a href="https://close.com/team-collaboration/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-collaborate.svg?h=9b42117c"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">Collaborate</div>
                    <div className="dropdown-item__description">
                      Grow your sales pipeline as a team
                    </div>
                  </div>
                </a>
                <a href="https://close.com/integrations" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-integrations.svg?h=99d1114f"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">Integrate</div>
                    <div className="dropdown-item__description">
                      Connect Close to your favourite tools
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="mobile-menu__item mobile-menu__item--primary">
              <div className="mobile-menu__link mobile-menu__link--primary mobile-menu__link--expandable">
                Solutions
              </div>
              <div className="mobile-menu mobile-menu--secondary">
                <a href="https://close.com/inbound-sales/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-product-menu-inbound-transparent.svg?h=d8738d1f"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">
                      Inbound Sales
                    </div>
                    <div className="dropdown-item__description">
                      Turn more inbound leads into sales dollars
                    </div>
                  </div>
                </a>
                <a href="https://close.com/outbound-sales/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-product-menu-outbound-transparent.svg?h=e2daa2f5"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">
                      Outbound Sales
                    </div>
                    <div className="dropdown-item__description">
                      Turn more cold leads into opportunities
                    </div>
                  </div>
                </a>
                <a href="https://close.com/remote-work/" className="dropdown-item">
                  <div className="dropdown-item__icon">
                    <img
                      src="https://close.com/static/img/icons/icon-product-menu-remote-transparent.svg?h=d75a29f5"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--s">Remote Sales</div>
                    <div className="dropdown-item__description">
                      Make remote work your sales team’s advantage
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="mobile-menu__item mobile-menu__item--primary">
              <div className="mobile-menu__link mobile-menu__link--primary">
                <a href="https://close.com/pricing/" className="mobile-menu__item">
                  Pricing
                </a>
              </div>
            </div>
            <div className="mobile-menu__item mobile-menu__item--primary">
              <div className="mobile-menu__link mobile-menu__link--primary">
                <a href="https://blog.close.com" className="mobile-menu__item">
                  Blog
                </a>
              </div>
            </div>
            <div className="mobile-menu__item mobile-menu__item--primary">
              <div className="mobile-menu__link mobile-menu__link--primary mobile-menu__link--expandable">
                Free Resources
              </div>
              <div className="mobile-menu mobile-menu--secondary">
                <a href="https://close.com/resources/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Sales Resource Library
                    </div>
                  </div>
                </a>
                <a
                  href="https://close.com/resources/startup-sales-resource-bundle/"
                  className="dropdown-item"
                >
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Startup Sales Bundle
                    </div>
                  </div>
                </a>
                <a href="https://close.com/sales-motivation/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Daily Sales Motivation <span className="new-label">New</span>
                    </div>
                  </div>
                </a>
                <a href="https://close.com/free-sales-course/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Email Sales Course
                    </div>
                  </div>
                </a>
                <a href="https://close.com/newsletter/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Weekly Sales Newsletter
                    </div>
                  </div>
                </a>
                <a href="https://help.close.com/docs/welcome-1" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Product Guide
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="mobile-menu__item mobile-menu__item--primary">
              <div className="mobile-menu__link mobile-menu__link--primary mobile-menu__link--expandable">
                About
              </div>
              <div className="mobile-menu mobile-menu--secondary">
                <a href="https://close.com/about/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      About Close
                    </div>
                  </div>
                </a>
                <a href="https://close.com/customers/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Customer Stories
                    </div>
                  </div>
                </a>
                <a href="https://jobs.close.com/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Join Our Team
                    </div>
                  </div>
                </a>
                <a href="https://close.com/events/" className="dropdown-item">
                  <div className="dropdown-item__text">
                    <div className="dropdown-item__title dropdown-item__title--secondary dropdown-item__title--s">
                      Events
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-menu mobile-menu--bottom">
            <a
              href="https://app.close.com/login/"
              className="button button--secondary button--regular"
            >
              Log in
            </a>
            <a
              href="https://app.close.com/signup/"
              className="button button--primary button--regular"
            >
              Try Close
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNav;
