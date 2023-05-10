export const popup = document.querySelector('.popup');
const profileForm = document.forms["form-profile"];
const cardForm = document.forms["card-form"];

// Добавляем карточки на страницу
import {cardGallery, submitCardForm} from './card.js';
cardGallery;
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
cardForm.addEventListener('submit', submitCardForm);

// Модальные окна
import {clickPopupClose, clickEscapePopup, openProfile, closeButtons} from './modal.js';
clickPopupClose;
clickEscapePopup;
openProfile;
closeButtons;

// Валидация формы
import {enableValidation, submitProfileForm} from './validate.js';
enableValidation();

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', submitProfileForm);
