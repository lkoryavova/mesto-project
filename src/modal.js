
import { openPopup, closePopup, inactiveButton } from './utils.js';
// import { profilePopup, place, viewing, openButton, profileFormName, profileName, profileFormJob } from './index.js';

const page = document.querySelector('.page');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');
const profileContainer = profile.querySelector('.profile__container');
const profileInfo = profileContainer.querySelector('.profile__info');
const profileText = profileInfo.querySelector('.profile__text');
const profileNameConteiner = profileInfo.querySelector('.profile__name-conteiner');
const profileName = profileNameConteiner.querySelector('.profile__name');
const profilePopup = page.querySelector('.profile-popup');
const place = page.querySelector('#place');
const viewing = page.querySelector('#viewing');
const openButton = profileNameConteiner.querySelector('.profile__edit-button');
const profileForm = document.forms["form-profile"];
const profileFormJob = profileForm.querySelector('[name="speсial"]');
const profileFormName = profileForm.querySelector('[name="name"]');
const popups = document.querySelectorAll('.popup');
const openButtonPlace = document.querySelector('.profile__add-button');
const placeButton = document.querySelector('#place-button');

// открытие окна Редактирования профиля
const openProfile = openButton.addEventListener('click', function (event) {
    profileFormName.value = profileName.textContent;
    profileFormJob.value = profileText.textContent;
    openPopup(profilePopup);
});

// Открытие окна Новое место
const openPlace = openButtonPlace.addEventListener('click', function (event) {
    inactiveButton(placeButton);
    openPopup(place);
});


const clickPopupClose = popups.forEach((popup) => {
    // находим 1 раз ближайший к крестику попап 
    popup.addEventListener('mousedown', function (event) {
        if (event.target === popup) {
            closePopup(popup);
        }
    });
});

const clickEscapePopup = popups.forEach((popup) => {
    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && popup.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
});

// Закрытие попапа нажатием на Esc
// const EscapeClosePopup = document.addEventListener('keydown', (event) => {
//     // if (event.code === "Escape" && profilePopup.classList.contains('popup_opened')) {
//     //     // closePopup(popup);
//     // }
// });

// document.addEventListener('keydown', (event) => {
//     if (event.code === "Escape" && viewing.classList.contains('popup_opened')) {
//         closePopup(viewing);
//     }
// });



// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

// с окончанием `s` нужно обязательно, так как много кнопок
closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап 
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => closePopup(popup));
});

export { clickPopupClose, clickEscapePopup, openProfile, openPlace, closeButtons };


// Закрытие попапа кликом на оверлей
//  const clickProfilePopup = profilePopup.addEventListener('mousedown', function (event) {
//     if (event.target === profilePopup) {
//       closePopup(popup);
//     }
//   });

//   const clickPlace = place.addEventListener('mousedown', function (event) {
//     if (event.target === place) {
//       closePopup(place);
//     }
//   });

//   const clickViewing = viewing.addEventListener('click', function (event) {
//     if (event.target === viewing) {
//       closePopup(viewing);
//     }
//   });