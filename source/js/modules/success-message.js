import { toggleClass } from './util.js';
import { toggleModal } from './modal-buy.js';

const MESSAGE = document.querySelector('.success-message__overlay');
const MODAL_FORM = document.querySelector(".modal-buy__form");
const BUTTON_CLOSE = document.querySelector('.success-message__button-close');
const INPUT_PHONE = document.querySelector(".modal-buy__input");
// -----------------------------------------------------------------------

const toggleMessage = () => {
  toggleClass(MESSAGE, "success-message__overlay--open");

  document.addEventListener('click', onOverlayClickHandler);
  document.addEventListener('keydown', onEscPressHandler);
  BUTTON_CLOSE.addEventListener("click", onButtonCloseHandler)
}
// -----------------------------------------------------------------------
const onButtonCloseHandler = () => {
  BUTTON_CLOSE.removeEventListener("click", onButtonCloseHandler)
  toggleMessage();
}

const onEscPressHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Escape') {
    toggleMessage();
    document.removeEventListener("keydown", onEscPressHandler);
  }
}

const onOverlayClickHandler = (evt) => {
  if (evt.target === MESSAGE) {
    toggleMessage();
    document.removeEventListener("click", onOverlayClickHandler);
  }
}

const modalSubmitHandler = (evt) => {
  evt.preventDefault()

  toggleModal();
  toggleMessage();

  MODAL_FORM.removeEventListener("submit", modalSubmitHandler);
}

const createSubmitHandler = () => {
  INPUT_PHONE.focus();

  MODAL_FORM.addEventListener('submit', modalSubmitHandler)
}

export { createSubmitHandler }

