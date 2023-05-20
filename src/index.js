import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { getUserProfile } from './api.js';

const profileForm = document.forms["form-profile"];
const cardForm = document.forms["card-form"];
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const profileAvatar = document.querySelector('.profile__avatar');

//  Загрузка информации о пользователе с сервера
getUserProfile().then((result) => {
    profileName.textContent = result.name;
    profileText.textContent = result.about;
    profileAvatar.src = result.avatar;

})
    .catch((err) => {
        console.log(err); // выводим ошибку в консоль
    });

// Добавляем карточки на страницу
import {submitCardForm} from './card.js';
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
