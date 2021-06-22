import { activateJSMenu, HAMBURGER, handleMenu } from './menu.js';
import { openModal } from './modal-buy.js';
import './tabs.js';
import './success-message.js';

window.addEventListener('load', () => {
  activateJSMenu();
  HAMBURGER.addEventListener('click', handleMenu);
  openModal();
});
