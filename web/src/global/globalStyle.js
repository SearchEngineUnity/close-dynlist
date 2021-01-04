import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
}
button,
input,
select,
textarea {
  margin: 0;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
img,
embed,
iframe,
object,
video {
  max-width: 100%;
}
audio {
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
  text-align: left;
}
html {
  overflow-x: hidden !important;
}
body {
  position: relative;
  overflow-x: hidden !important;
}
a {
  text-decoration: none;
  color: #7b85a0;
}
.section {
  padding: 2rem 0;
}
@media (min-width: 880px) {
  .section {
    padding: 5rem 0;
  }
}
.section--last {
  padding-bottom: 6rem;
}
@media (min-width: 880px) {
  .section--last {
    padding-bottom: 15rem;
  }
}
.card {
  border-radius: 8px;
  background-color: #fbfbfc;
  padding: 2rem;
  margin-bottom: 2rem;
}
.card .card__div {
  margin-bottom: 1rem;
}
.hidden_row {
  display: none;
}

.col {
  display: block;
  float: left;
  margin: 1% 0 1% 1.6%;
}
.col:first-child {
  margin-left: 0;
}

.new-label {
  font-size: 0.625rem;
  font-weight: 600;
  line-height: 1;
  padding: 3px 3px 2px;
  border-radius: 2px;
  background-color: #4364af;
  text-transform: uppercase;
  color: #fff;
  vertical-align: 1px;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 3rem;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  letter-spacing: -0.75rem;
  line-height: 1;
  margin-bottom: 2rem;
  color: #fff;
  text-shadow: 0 8px 48px rgba(155, 162, 189, 0.4);
}
@media (min-width: 640px) {
  .error-code {
    font-size: 16rem;
  }
}
.error-message {
  width: 640px;
  max-width: 100%;
  margin: 0 auto;
}
.error-message {
  margin-bottom: 2rem;
}
.container {
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 1.25rem;
  width: 100%;
}
.row {
  display: flex;
  padding: 0;
  width: 100%;
}
.row.row-wrap {
  flex-wrap: wrap;
}
.row--inner {
  margin: 0 -1rem;
}
.column {
  display: block;
  flex: 1 1 auto;
  max-width: 100%;
  width: 100%;
  padding: 0 1rem;
}
@media (min-width: 880px) {
  .container {
    padding: 0 2rem;
  }
  .column {
    margin-bottom: inherit;
    padding: 0 1rem;
  }
  .column--1 {
    flex: 0 0 8.333%;
    max-width: 8.333%;
  }
  .column--2 {
    flex: 0 0 16.666%;
    max-width: 16.666%;
  }
  .column--3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .column--4 {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
  .column--5 {
    flex: 0 0 41.666%;
    max-width: 41.666%;
  }
  .column--6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .column--7 {
    flex: 0 0 58.33333%;
    max-width: 58.3333%;
  }
  .column--8 {
    flex: 0 0 66.6666%;
    max-width: 66.6666%;
  }
  .column--9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .column--10 {
    flex: 0 0 83.3333%;
    max-width: 83.3333%;
  }
  .column--11 {
    flex: 0 0 91.6666%;
    max-width: 91.6666%;
  }
  .column--12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.no-scroll {
  overflow: hidden;
  height: 100vh !important;
}
.invisible {
  display: none !important;
}
.text--center {
  text-align: center;
}

.hide--mobile {
  display: none;
}
@media (min-width: 880px) {
  .hide--mobile {
    display: block;
  }
}

html {
  font-size: 16px;
  line-height: 1.5;
}
body {
  font-family: "Inter", system-ui, sans-serif;
  color: #3E444E;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}
h1 {
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}
@media (min-width: 880px) {
  h1 {
    font-size: 3.5rem;
    line-height: 4rem;
    margin-bottom: 1.5rem;
  }
}
h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
}
@media (min-width: 880px) {
  h2 {
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 1.5rem;
  }
}
h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}
@media (min-width: 880px) {
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
}
p {
  margin-bottom: 0.5rem;
}

.announcement-banner {
  background-color: #4f64a5;
  padding: 1rem 0;
  font-size: 0.875rem;
  text-align: center;
  color: #fff;
}
.announcement-banner--brand-green {
  background-color: #47bb7f;
}
.announcement-banner--brand-blue {
  background-color: #2b6190;
}
.announcement-banner--brand-cyan {
  background-color: #57b7df;
}
.announcement-banner a {
  color: #fff;
  text-decoration: underline;
  transition: opacity 0.3s;
}
.announcement-banner a:hover {
  opacity: 0.9;
}
.announcement-banner__message {
  display: block;
}
@media (min-width: 550px) {
  .announcement-banner__message {
    display: inline;
  }
}
.header {
  position: relative;
  z-index: 2;
  background-color: #fff;
  padding: 1.5rem 0;
}
.header__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.header .row {
  justify-content: space-between;
  margin-top: 0.5rem;
}
.navigation--primary {
  display: none;
  margin-left: 1.5rem;
  flex-grow: 1;
  position: relative;
}
.navigation--secondary {
  display: none;
  align-self: flex-end;
}
.navigation--mobile {
  display: none;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll !important;
}
.navigation--mobile .button {
  width: 100%;
  margin: 0 0 1rem 0;
}
@media (min-width: 320px) {
  .navigation--mobile .button {
    width: auto;
    margin: 0 1rem 0 0;
  }
}
.navigation--mobile.on {
  display: block;
}
.navigation__item {
  display: inline-block;
  padding: 1rem 1.25rem;
  color: #3e444e;
  line-height: 1.5rem;
  cursor: pointer;
  position: relative;
}
@media (min-width: 1024px) {
  .navigation__item {
    padding: 1rem 1.5rem;
  }
}
.navigation__item:hover .navigation__link {
  opacity: 0.8;
}
.navigation__link {
  color: #3e444e;
  transition: opacity 0.3s;
}
.mobile-menu__wrapper {
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1.5rem 1.25rem;
}
.mobile-menu__top {
  border-bottom: 1px solid #ebeef2;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: space-between;
}
.mobile-menu--primary {
  margin-bottom: 2.5rem;
  width: 100%;
  flex-grow: 1;
}
.mobile-menu--secondary {
  display: none;
  padding: 1.5rem 0 0.5rem;
}
.mobile-menu--bottom {
  width: 100%;
}
.mobile-menu--bottom .button {
  width: 100%;
  margin: 0 0 1rem;
}
.mobile-menu__item {
  color: #3e444e;
}
.mobile-menu__item--primary {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0.75rem 0;
}
.mobile-menu__link {
  cursor: pointer;
  font-size: 1rem;
}
.mobile-menu__link--expandable {
  position: relative;
}
.mobile-menu__link--expandable::after {
  content: "";
  border-bottom: 2px solid #3e444e;
  border-right: 2px solid #3e444e;
  transform: rotate(45deg);
  width: 6px;
  height: 6px;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: 6px;
  right: 0;
  margin-left: 6px;
  transition: 0.3s;
}
.mobile-menu__link--expandable.open::after {
  transform: rotate(225deg);
}
.mobile-nav-trigger {
  width: 26px;
  height: 56px;
  border-radius: 4px;
  position: relative;
}
.mobile-nav-trigger::before,
.mobile-nav-trigger::after {
  content: "";
  position: absolute;
  left: 0;
  background-color: #3e444e;
  border-radius: 2px;
  height: 3px;
}
.mobile-nav-trigger::before {
  top: 22px;
  width: 26px;
}
.mobile-nav-trigger::after {
  top: 32px;
  width: 20px;
}
.mobile-nav-close {
  width: 26px;
  height: 40px;
  border-radius: 4px;
  position: relative;
  right: -4px;
  margin-left: auto;
}
.mobile-nav-close::before,
.mobile-nav-close::after {
  content: "";
  position: absolute;
  top: 8px;
  left: 11px;
  width: 3px;
  height: 24px;
  background-color: #3e444e;
  border-radius: 2px;
}
.mobile-nav-close::before {
  transform: rotate(45deg);
}
.mobile-nav-close::after {
  transform: rotate(-45deg);
}
@media (min-width: 1094px) {
  .navigation--primary,
  .navigation--secondary {
    display: flex;
  }
  .navigation--mobile {
    display: none;
  }
  .mobile-nav-trigger {
    display: none;
  }
}
@media (min-width: 1024px) {
  .navigation--primary {
    margin-left: 2rem;
  }
}
.dropdown-menu {
  position: absolute;
  top: 46px;
  left: 0;
  background-color: #fff;
  z-index: 999999;
  border-radius: 8px;
  box-shadow: 0 -2px 40px rgba(51, 67, 77, 0.1), 1px 1px 5px rgba(51, 67, 77, 0.1), 0 62px 124px rgba(51, 67, 77, 0.2), 0 38px 74px rgba(51, 67, 77, 0.2);
  padding: 8px;
  display: flex;
  transition: all 0.2s ease;
  visibility: hidden;
  opacity: 0;
  display: none;
  pointer-events: none;
}
.dropdown-menu.on {
  display: flex;
}
.dropdown-menu.active {
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  top: 56px;
}
.dropdown-menu.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 10px;
  background: transparent;
  top: -10px;
  z-index: -1;
}
.dropdown-menu::before {
  content: "";
  position: absolute;
  background-color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  top: -4px;
  z-index: -1;
  transform: rotate(45deg);
}
.dropdown-menu__section {
  width: 50%;
  padding: 24px;
}
.dropdown-menu__section--full {
  width: 100%;
}
.dropdown-menu__heading {
  color: #7b85a0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.75rem;
  margin-bottom: 20px;
}
.dropdown-menu--product {
  width: 744px;
}
.dropdown-menu--product::before {
  left: 38px;
}
.dropdown-menu--solutions {
  width: 744px;
}
.dropdown-menu--solutions::before {
  left: 38px;
}
.dropdown-menu--resources {
  width: 480px;
}
.dropdown-menu--resources::before {
  left: 66px;
}
.dropdown-menu--about {
  width: 204px;
}
.dropdown-menu--about::before {
  left: 31px;
}
.dropdown-item {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.dropdown-item:last-child {
  margin-bottom: 0;
}
.dropdown-item__icon {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: #202024;
  margin-right: 12px;
  flex-shrink: 0;
  overflow: hidden;
  transition: background 0.5s ease;
}
.dropdown-item__text {
  padding-top: 3px;
  align-items: center;
  transition: opacity 0.3s;
}
.dropdown-item__title {
  color: #3e444e;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
}
.dropdown-item__title--s {
  font-size: 0.875rem;
}
.dropdown-item__title--secondary {
  font-weight: normal;
}
.dropdown-item__description {
  color: #7b85a0;
  font-size: 0.75rem;
  line-height: 1.5;
  font-weight: normal;
}
.dropdown-item:hover .dropdown-item__icon {
  background-color: #4364af;
}
.dropdown-item:hover .dropdown-item__text {
  opacity: 0.8;
}
.footer {
  position: relative;
  background-color: #1c1c1f;
  color: #fff;
  font-size: 0.9375rem;
}
.footer__top {
  padding: 2rem 0;
}
.footer__menus {
  width: 100%;
}
.footer__menu {
  max-width: 100%;
  margin-bottom: 2rem;
}
.footer__menu:last-child {
  margin-bottom: 0;
}
.footer__heading {
  color: #fff;
  margin-bottom: 1rem;
}
.footer__link {
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
  opacity: 0.75;
  transition: opacity 0.5s;
}
.footer__link:hover {
  opacity: 1;
}
.footer__copyright {
  font-size: 0.6875rem;
  color: #becde7;
  color: #fff;
  opacity: 0.75;
  padding-left: 32px;
}
.footer__bottom {
  text-align: right;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.footer__bottom::after {
  content: "";
  position: absolute;
  background-color: #0d0d0e;
  width: 100%;
  height: 200%;
  top: 10px;
  right: 0;
  transform: skewY(-2deg);
  z-index: -1;
}
@media (min-width: 880px) {
  .footer__bottom::after {
    top: 30px;
  }
}
.footer__social {
  z-index: 1000;
  padding: 2rem 0 1rem;
}
.footer__social-link {
  margin-left: 1rem;
  opacity: 0.75;
  transition: opacity 0.5;
}
.footer__social-link img {
  display: inline;
}
.footer__social-link:hover {
  opacity: 1;
}
.footer::before {
  content: "";
  position: absolute;
  height: 50px;
  width: 100%;
  background-color: tomato;
  top: -24px;
  left: 0;
  transform: skewY(-2deg);
  z-index: 4;
  background-color: #1c1c1f;
}
@media (min-width: 880px) {
  .footer::before {
    height: 80px;
    top: -50px;
  }
}
@media (min-width: 28rem) {
  .footer__top {
    padding: 4rem 0;
  }
  .footer__menus {
    display: flex;
    flex-wrap: wrap;
  }
  .footer__menu {
    width: 50%;
  }
  .footer__menu--company {
    width: 100%;
  }
}
@media (min-width: 56rem) {
  .footer__menus {
    justify-content: space-between;
  }
  .footer__menu {
    width: auto;
    max-width: 220px;
    margin-bottom: 0;
  }
  .footer__menu--company {
    position: relative;
    top: -8px;
  }
  .footer__heading {
    margin-bottom: 1.5rem;
  }
  .footer__copyright {
    text-align: right;
    padding: 0;
  }
}
.button {
  position: relative;
  font-weight: 600;
  display: inline-block;
  border-radius: 4px;
  line-height: 1;
  transition: transform 0.3s ease-out;
  text-align: center;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 1rem;
}
@media (min-width: 480px) {
  .button {
    font-size: 1rem;
  }
}
.button:hover {
  transform: translate(0, -2px);
}
@media (min-width: 480px) {
  .button--regular {
    padding: 1.25rem;
  }
}
@media (min-width: 480px) {
  .button--large {
    padding: 1.5rem;
  }
}
@media (min-width: 480px) {
  .button--small {
    padding: 1rem;
    font-size: 0.875rem;
  }
}
.button--primary {
  color: #fff;
  background-color: #4364af;
}
.button--secondary {
  color: #fff;
  background-color: #1c1c1f;
}
.button--white {
  color: #4364af;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(51, 62, 77, 0.15);
}
.button--brand-cyan {
  color: #fff;
  background-color: #57b7df;
}
.button--blkonwht {
  color: #3e444e;
}
.button--full-width {
  width: 100%;
}
.button--margin-top {
  margin-top: 2rem;
}
.button__icon--left {
  margin-right: 0.75rem;
  vertical-align: -3px;
}
.link--primary {
  color: #3e444e;
  border-color: #4364af;
}
.link--light {
  color: #fff;
}
.link--dark {
  color: #3e444e;
}
.link--blue {
  color: #4364af;
}
.link--bold {
  font-weight: 600;
}
.link--inactive {
  color: #7b85a0;
  opacity: 0.5;
  cursor: default;
}
.link--underline {
  text-decoration: underline;
}
.gradient-background--top {
  position: absolute;
  width: 200%;
  height: 1600px;
  transform: skewY(-3deg);
  z-index: -1;
  top: 500px;
  background: #f2f3f9;
  background: linear-gradient(0deg, #fff 0, #f2f3f9 100%);
}
@media (min-width: 880px) {
  .gradient-background--top {
    top: 800px;
  }
}
.gradient-background--error-page {
  top: 270px;
}
@media (min-width: 640px) {
  .gradient-background--error-page {
    top: 340px;
  }
}



a, a:hover, a:focus, a:active {
  text-decoration: none;
  color: inherit;
}

.button--special {
  padding: 0.8rem;
  font-size: 0.875rem;
}

a.button--primary:hover, a.button--primary:focus, a.button--primary:active{
  text-decoration: none;
  background-color: #5172BD;
  border-color: #5172BD;
  color: #FFFFFF;
}

.dropdown-menu {
  border: none;
}

.dropdown-item {
  padding: 0;
  white-space: normal;
}

.solid-background--top--grey {
  top: 400px;
  position: absolute;
  width: 100vw;
  height: 500px;
  transform: skewY(-3deg);
  z-index: -1;
  background: #F2F3F9;
}

.dynlist-navItem-tierOne--desktop {
  background-color: #3E444E;
  border: 0;
  border-bottom: 4px solid #F2F3F9;
  border-radius: none;
  color: #FFFFFF;
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  font-weight: bold;
}

.dynlist-navItem-tierOne--desktop:hover, 
.dynlist-navItem-tierOne--desktop:focus, 
.dynlist-navItem-tierOne--desktop:active,
.dynlist-navItem-tierOne--desktop.active {
  background-color: #4364AF;
  color: white;
  outline: none;
  text-decoration: underline;
}

.dynlist-navItem-tierTwo--desktop {
  background-color: #FFFFFF;
  border: 0;
  border-bottom: 4px solid #F2F3F9;
  border-radius: none;
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
}

.dynlist-navItem-tierTwo--desktop:hover, 
.dynlist-navItem-tierTwo--desktop:focus, 
.dynlist-navItem-tierTwo--desktop:active,
.dynlist-navItem-tierTwo--desktop.active {
  background-color: #4364AF;
  outline: none;
  text-decoration: underline;
  color: white;
}

.fa-m:before {
  font-family:"Inter",sans-serif;
  font-weight: 600;
  font-size: 18px;
  content: 'M';
  color: #FFFFFF;
}

.fa-f:before {
  font-family:"Inter",sans-serif;
  font-weight: 600;
  content: 'F';
  font-size: 18px;
  color: #FFFFFF;
}

.dynlist-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  list-style: none;
}

.dynlist-breadcrumbItem {
  display: flex;
}

.dynlist-breadcrumbItem:hover {
  display: flex;
  text-decoration: underline;
}

.dynlist-bradcrumbItem-seperator {
  padding: 0 0.5rem;
  font-weight: normal;
  text-decoration: none;
}

.dynlist-breadcrumbItem.active {
  display: flex;
  font-weight: bold;
  color: #4364AF;
  text-decoration: none;
}

.dynlist-breadcrumbItem-mobile {
  display: flex;
  font-weight: bold;
  color: #4364AF;
}

.dynlist-breadcrumbItem-mobile::before {
  display: inline-block;
  padding-right: .5rem;
  content: "<";
  font-weight: bold;
  color: #4364AF;
}

.dynlist-breadcrumbItem-mobile-root {
  display: flex;
  font-weight: bold;
  color: #4364AF;
}

.dynlist-breadcrumbItem-mobile-root::after {
  display: inline-block;
  padding-left: .5rem;
  content: ">";
  font-weight: bold;
  color: #4364AF;
}

.dynlist-nav--mobile {
  display: block;
  z-index: 1000;
  width: 100vw;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll !important;
}

.dynlist-nav-close {
  width: 26px;
  height: 40px;
  border-radius: 4px;
  position: relative;
  right: -4px;
  margin-left: auto;
}

.dynlist-nav-close::before, .dynlist-nav-close::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 11px;
  width: 3px;
  height: 24px;
  background-color: #3E444E;
  border-radius: 2px;
}

.dynlist-nav-close::before {
  transform: rotate(45deg);
}

.dynlist-nav-close::after {
  transform: rotate(-45deg);
}

.icon-background {
  color: black;
}

#dynlistPage .section {
  padding: 1rem 0
}

#dynlistPage .section--last {
  padding-bottom: 6rem;
}

.rtf--ab__c>span {
  background: black;
}

@media (min-width: 880px){
  #dynlistPage .section {
    padding: 2.5rem 0;
  }

  #dynlistPage .section--last {
    padding-bottom: 15rem;
  }

  #dynlistPage h1 {
    font-size: 2.5rem;
    line-height: 3rem;
  }

}
`;

export default GlobalStyle;
