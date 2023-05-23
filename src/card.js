import { openPopup, closePopup } from './utils.js';
import { getInitialCards, addNewCard, toggleLike } from './api.js';

const elements = document.querySelector('.elements');
// const inputsCardForm = cardForm.querySelectorAll('#place-name, #place-way');
const inputsCardForm = document.querySelectorAll('#place-name, #place-way');
const placeViewingImage = document.querySelector('.place-viewing__image');
const placeViewingCaption = document.querySelector('.place-viewing__caption');
const viewingContainer = viewing.querySelector('.viewing-container');
const viewingClose = viewingContainer.querySelector('#viewing-close');
const placeName = document.querySelector('#place-name');
const placeWay = document.querySelector('#place-way');

// Функция создания новой карточки
function createCard(link, name, _id, likes) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementSignature = cardElement.querySelector('.element__signature');
  const elementName = elementSignature.querySelector('.element__name');
  const elementChoiceBox = elementSignature.querySelector('.element__choice-box');
  const elementChoiceQuantity = elementChoiceBox.querySelector('.element__choice-quantity');

  elementImage.src = `${link}`;
  elementName.textContent = `${name}`;
  elementImage.alt = `${name}`;
  elementChoiceQuantity.textContent = `${likes}`;

  // Лайк карточки
  const elementChoice = elementChoiceBox.querySelector('.element__choice');
  elementChoice.addEventListener('click', function (event) {
    event.target.classList.toggle('element__choice_active');

    // if (elementChoice.classList.contains('element__choice_active')) {
    //   elementChoiceQuantity.textContent = toggleLike(_id, 'PUT');
    // } else {
    //   elementChoiceQuantity.textContent = toggleLike(_id, 'DELETE');
    // }
  });

  // Удаление карточки
  const elementDelete = cardElement.querySelector('.element__delete');
  elementDelete.addEventListener('click', function () {
    const listItem = elementDelete.closest('.element');
    console.log("Удаление карточки");
    listItem.remove();
  });

  //Открытие попапа с картинкой
  elementImage.addEventListener('click', function () {
    placeViewingImage.src = `${link}`;
    placeViewingImage.alt = `${name}`;
    placeViewingCaption.textContent = `${name}`;
    openPopup(viewing);
  });
  return cardElement;
}

// Добавляем карточки на страницу
// addNewCard().then((result) => {
//   elements.append(createCard(result.link, result.name));
// });

const addCard = function (link, name, _id, likes) {
  elements.append(createCard(link, name, _id, likes));
}

// Загрузка карточек с сервера
getInitialCards().then((result) => {
  result.forEach(item => {
    // console.log(item.name, item.likes.length);
    addCard(item.link, item.name, item._id, item.likes.length);
  });
})
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
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
  // const addNewCard = function (link, name) {
  // if (link !== "" && name !== "") {
  elements.prepend(createCard(placeWayValue, placeNameValue));
  // }
  // }
  addCard(placeWayValue, placeNameValue, 0);
  addNewCard(placeWayValue, placeNameValue);
  closePopup(place);
  // очищаем инпуты
  evt.target.reset();
}

export { submitCardForm };


