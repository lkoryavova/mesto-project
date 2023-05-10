// Функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
  
  // Функция закрытия попапа
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }
  
  // Функция делающая кнопку сохранить активной
  function activeButton(formProfileButton) {
    formProfileButton.classList.remove('form-profile__button_inactive');
  }

  // Функция делающая кнопку сохранить неактивной
  function inactiveButton(formProfileButton) {
    formProfileButton.classList.add('form-profile__button_inactive');
  }

  export {openPopup, closePopup, activeButton, inactiveButton};