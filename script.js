const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const popupClose = popupContainer.querySelector('.popup__close');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');
const profileContainer = profile.querySelector('.profile__container');
const profileInfo = profileContainer.querySelector('.profile__info');
const profileNameConteiner = profileInfo.querySelector('.profile__name-conteiner');
const openButton = profileNameConteiner.querySelector('.profile__edit-button');

// открытие модального окна
openButton.addEventListener('click', function (event) {
  popup.classList.add('popup_opened');
});

// закрытие
popupClose.addEventListener('click', function (event) {
  popup.classList.remove('popup_opened');
});

// Поля формы

// Выберите элементы, куда должны быть вставлены значения полей
const profileName = profileNameConteiner.querySelector('.profile__name');
const profileText = profileInfo.querySelector('.profile__text');

// Находим форму в DOM
const formElement = popupContainer.querySelector('[name="form-profile"]');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  const nameInput = formElement.querySelector('[name="name"]').value;
  const jobInput = formElement.querySelector('[name="speсial"]').value;
  // Вставьте новые значения с помощью textContent
  if (nameInput !== "" && jobInput !== "") {
    profileName.textContent = nameInput;
    profileText.textContent = jobInput;
  }
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
// Автоматическое закрытие попапа
const formButton = formElement.querySelector('.form-profile__button');
formButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});



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

const elements = document.querySelector('.elements');

const element = function cardCreate(link, name) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image').src = `${link}`;
  const elementSignature = cardElement.querySelector('.element__signature');
  const elementName = elementSignature.querySelector('.element__name').textContent = `${name}`;
  elementImage.alt = `${name}`;
  // Лайк карточки
  const elementChoice = elementSignature.querySelector('.element__choice');
  elementChoice.addEventListener('click', function (event) {
    event.target.classList.toggle('element__choice_active');
  });
  // Удаление карточки
  const elementDelete = cardElement.querySelector('.element__delete');
  elementDelete.addEventListener('click', function (event) {
    const listItem = elementDelete.closest('.element');
    listItem.remove();
  });
  return cardElement;
}

const addCard = function (link, name) {
  elements.append(element(link, name));
}

initialCards.forEach(item => {
  addCard(item.link, item.name);
});

// открытие окна место
const place = page.querySelector('#place');
const placeContainer = place.querySelector('#place-container');
const placeClose = placeContainer.querySelector('#place-close');
const openButtonPlace = profile.querySelector('.profile__add-button');

openButtonPlace.addEventListener('click', function (event) {
  place.classList.add('popup_opened');
});

// закрытие
placeClose.addEventListener('click', function (event) {
  place.classList.remove('popup_opened');
});

// Добавление карточки пользователем

// Находим форму в DOM
const formPlace = placeContainer.querySelector('[name="form-place"]');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleplaceSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей placeName и placeWay из свойства value
  const placeName = formPlace.querySelector('#place-name').value;
  const placeWay = formPlace.querySelector('#place-way').value;

  const addnewCard = function (link, name) {
    if (link !== "" && name !== "") {
      elements.prepend(element(link, name));
    }
  }
  addnewCard(placeWay, placeName);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formPlace.addEventListener('submit', handleplaceSubmit);
// Автоматическое закрытие попапа
const placeButton = formPlace.querySelector('#place-button');
placeButton.addEventListener('click', function () {
  place.classList.remove('popup_opened');
});

//Открытие попапа с картинкой
//Находим элементы
const placeViewing = document.querySelector('.place-viewing');
const placeViewingImage = placeViewing.querySelector('.place-viewing__image');
const placeViewingCaption = placeViewing.querySelector('.place-viewing__caption');
const elementImage = document.querySelectorAll('.element__image');
//Присваиваем значения
elementImage.forEach((elementImage) => {
elementImage.addEventListener('click', function (event) {
  placeViewingImage.src = event.currentTarget.src;
const element = elementImage.closest('.element');
const elementName = element.querySelector('.element__name');
  placeViewingCaption.textContent = elementName.textContent;
  viewing.classList.add('popup_opened');
})
});

// Закрываем попап
const viewing = page.querySelector('#viewing');
const viewingContainer = viewing.querySelector('.viewing-container');
const viewingClose = viewingContainer.querySelector('#viewing-close');
viewingClose.addEventListener('click', function (event) {
  viewing.classList.remove('popup_opened');
});