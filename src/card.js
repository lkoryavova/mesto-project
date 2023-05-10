import {openPopup, closePopup} from './utils.js';

const elements = document.querySelector('.elements');
// const inputsCardForm = cardForm.querySelectorAll('#place-name, #place-way');
const inputsCardForm = document.querySelectorAll('#place-name, #place-way');
const placeViewingImage = document.querySelector('.place-viewing__image');
const placeViewingCaption = document.querySelector('.place-viewing__caption');
const viewingContainer = viewing.querySelector('.viewing-container');
const viewingClose = viewingContainer.querySelector('#viewing-close');
const placeName = document.querySelector('#place-name');
const placeWay = document.querySelector('#place-way');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// Добавляем карточки на страницу

function createCard(link, name) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementSignature = cardElement.querySelector('.element__signature');
  const elementName = elementSignature.querySelector('.element__name');
  elementImage.src = `${link}`;
  elementName.textContent = `${name}`;
  elementImage.alt = `${name}`;

  // Лайк карточки
  const elementChoice = elementSignature.querySelector('.element__choice');
  elementChoice.addEventListener('click', function (event) {
    event.target.classList.toggle('element__choice_active');
    console.log("Лайк карточки");
  });
  // Удаление карточки
  const elementDelete = cardElement.querySelector('.element__delete');
  elementDelete.addEventListener('click', function (event) {
    const listItem = elementDelete.closest('.element');
    console.log("Удаление карточки");
    listItem.remove();
  });

  //Открытие попапа с картинкой
  elementImage.addEventListener('click', function (event) {
    placeViewingImage.src = `${link}`;
    placeViewingImage.alt = `${name}`;
    placeViewingCaption.textContent = `${name}`;
    openPopup(viewing);
  });
  return cardElement;
}

const addCard = function (link, name) {
  elements.append(createCard(link, name));
}

const cardGallery = initialCards.forEach(item => {
  addCard(item.link, item.name);
});

// Добавление карточки пользователем
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitCardForm(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
  
    // Получите значение полей placeName и placeWay из свойства value
    const placeNameValue = placeName.value;
    const placeWayValue = placeWay.value;
    const addNewCard = function (link, name) {
      if (link !== "" && name !== "") {
        elements.prepend(createCard(link, name));
      }
    }
    addNewCard(placeWayValue, placeNameValue);
    closePopup(place);
    // очищаем инпуты
    evt.target.reset();
  }

export {cardGallery, submitCardForm};