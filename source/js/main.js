import { activateJSMenu, HAMBURGER, handleMenu } from './modules/menu.js';
import { openModal } from './modules/modal-buy.js';
import './modules/tabs.js';
import './modules/success-message.js';

window.addEventListener('load', () => {
  activateJSMenu();
  HAMBURGER.addEventListener('click', handleMenu);
  openModal();
});
