import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function DynlistMenuMobile({ menu }) {
  console.log(menu);

  return (
    <div className="navigation navigation--mobile" style={{ display: 'none' }}>
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
        {menu.map((categorySet) => {
          return (
            <div className="mobile-menu mobile-menu--primary" key={categorySet._key}>
              <div className="mobile-menu__item mobile-menu__item--primary">
                <div className="mobile-menu__link mobile-menu__link--primary mobile-menu__link--expandable">
                  {categorySet.label}
                </div>
                <div className="mobile-menu mobile-menu--secondary" style={{ display: 'none' }}>
                  {categorySet.group.map((category) => {
                    return (
                      <Link href="/product/" className="dropdown-item" key={category._key}>
                        <div className="dropdown-item__icon">
                          <i className={category.icon} />
                        </div>
                        <div className="dropdown-item__text">
                          <div className="dropdown-item__title dropdown-item__title--s">
                            {category.label}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DynlistMenuMobile;
