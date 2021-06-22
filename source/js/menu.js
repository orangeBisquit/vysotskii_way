import { toggleClass } from './util.min.js'

const HAMBURGER = document.querySelector('.hamburger');
const MOBILE_NAV_WRAPPER = document.querySelector('.header__menu');
const MOBILE_NAV = document.querySelector('.header__nav');
const DISABLED_JS_ELEMENTS = document.querySelectorAll('.js-disabled');

const activateElements = (element) => {
  const baseClass = element.classList[0];
  element.classList.add(`${baseClass}--js-active`)
};

const activateJSMenu = () => {
  DISABLED_JS_ELEMENTS.forEach((element) => {
    element.classList.remove('js-disabled');
  });
  activateElements(MOBILE_NAV);
  activateElements(MOBILE_NAV_WRAPPER);
};

const handleMenu = () => {
  toggleClass(HAMBURGER, 'hamburger--active');
  toggleClass(MOBILE_NAV_WRAPPER, 'header__menu--open');
  toggleClass(MOBILE_NAV, 'header__nav--open');
};

export { activateJSMenu, HAMBURGER, handleMenu }
