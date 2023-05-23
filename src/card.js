import { openPopup, closePopup } from './utils.js';
import { getInitialCards, submitNewCard, toggleLike } from './api.js';

const myID = 'b63e6496dcdc54028081a240';
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
  const elementChoice = elementChoiceBox.querySelector('.element__choice');

  elementImage.src = `${link}`;
  elementName.textContent = `${name}`;
  elementImage.alt = `${name}`;
  elementChoiceQuantity.textContent = `${likes.length}`;
  likes.forEach(item => {
    if (item._id == myID) {
      elementChoice.classList.add('element__choice_active');
    }
  });

  // Лайк карточки
  
  elementChoice.addEventListener('click', function (event) {
    event.target.classList.toggle('element__choice_active');
    if (elementChoice.classList.contains('element__choice_active')) {
      elementChoiceQuantity.textContent = toggleLike(_id, 'PUT');
    } else {
      elementChoiceQuantity.textContent = toggleLike(_id, 'DELETE');
    }
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


// Загрузка карточек с сервера
getInitialCards().then((result) => {
  result.forEach(item => {
    elements.append(createCard(item.link, item.name, item._id, item.likes));
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
  submitNewCard(placeWayValue, placeNameValue).then((result) => {
    elements.prepend(createCard(result.link, result.name, result._id, result.likes));
  })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });

  closePopup(place);
  // очищаем инпуты
  evt.target.reset();
}

export { submitCardForm };


