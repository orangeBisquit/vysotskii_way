import { activateJSMenu, HAMBURGER, handleMenu } from './menu.min.js';
import { openModal } from './modal-buy.min.js';
import './tabs.js';
import './success-message.min.js';

window.addEventListener('load', () => {
  activateJSMenu();
  HAMBURGER.addEventListener('click', handleMenu);
  openModal();
});
