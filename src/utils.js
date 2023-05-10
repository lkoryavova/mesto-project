// import popup from './index.js';

// Функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
  
  
  // Функция закрытия попапа
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }
  
  function activeButton(formProfileButton) {
    formProfileButton.classList.remove('form-profile__button_inactive');
  }

  function inactiveButton(formProfileButton) {
    formProfileButton.classList.add('form-profile__button_inactive');
  }

  export {openPopup, closePopup, activeButton, inactiveButton};