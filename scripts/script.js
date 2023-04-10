const page = document.querySelector('.page');
const profilePopup = page.querySelector('.profile-popup');
const popupContainer = profilePopup.querySelector('.popup__container');
const profileCloseButton = popupContainer.querySelector('.profile__close-button');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');
const profileContainer = profile.querySelector('.profile__container');
const profileInfo = profileContainer.querySelector('.profile__info');
const profileNameConteiner = profileInfo.querySelector('.profile__name-conteiner');
const openButton = profileNameConteiner.querySelector('.profile__edit-button');
const profileForm = document.forms["form-profile"];
const profileFormName = profileForm.querySelector('[name="name"]');
const profileFormJob = profileForm.querySelector('[name="speсial"]');
const profileName = profileNameConteiner.querySelector('.profile__name');
const profileText = profileInfo.querySelector('.profile__text');
const cardForm = document.forms["card-form"];
const placeName = cardForm.querySelector('#place-name');
const placeWay = cardForm.querySelector('#place-way');
const inputsProfileForm = profileForm.querySelectorAll('#name, #speсial');
const inputsCardForm = cardForm.querySelectorAll('#place-name, #place-way');
const placeViewing = document.querySelector('.place-viewing');
const placeViewingImage = placeViewing.querySelector('.place-viewing__image');
const placeViewingCaption = placeViewing.querySelector('.place-viewing__caption');
const viewing = page.querySelector('#viewing');
const viewingContainer = viewing.querySelector('.viewing-container');
const viewingClose = viewingContainer.querySelector('#viewing-close');

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}


// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// открытие модального окна
openButton.addEventListener('click', function (event) {
  openPopup(profilePopup);
});

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

// с окончанием `s` нужно обязательно, так как много кнопок
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});
 
// Поля формы
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  const nameInput = profileFormName.value;
  const jobInput = profileFormJob.value;
  // Вставьте новые значения с помощью textContent
  if (nameInput !== "" && jobInput !== "") {
    profileName.textContent = nameInput;
    profileText.textContent = jobInput;
  }
  closePopup(profilePopup); // Автоматическое закрытие попапа
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', submitProfileForm);


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
    console.log ("Лайк карточки"); 
  });
  // Удаление карточки
  const elementDelete = cardElement.querySelector('.element__delete');
  elementDelete.addEventListener('click', function (event) {
    const listItem = elementDelete.closest('.element');
    console.log ("Удаление карточки"); 
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

initialCards.forEach(item => {
  addCard(item.link, item.name);
});

// открытие окна место
const place = page.querySelector('#place');
const placeContainer = place.querySelector('#place-container');
const placeClose = placeContainer.querySelector('#place-close');
const openButtonPlace = profile.querySelector('.profile__add-button');

openButtonPlace.addEventListener('click', function (event) {
  openPopup(place);
});

// закрытие
placeClose.addEventListener('click', function (event) {
  closePopup(place);
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
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
cardForm.addEventListener('submit', submitCardForm);
