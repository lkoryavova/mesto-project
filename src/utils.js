// import popup from './index.js';

// Функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
  
  
  // Функция закрытия попапа
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }
  
  export {openPopup, closePopup};