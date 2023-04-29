const page = document.querySelector('.page');
const popup = document.querySelector('.popup');
const profilePopup = page.querySelector('.profile-popup');
const place = page.querySelector('#place');
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
//
const formElement = document.querySelector('.form');
const formProfileText = formElement.querySelector('.form-profile__text');
const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт
const formProfileTextError = document.querySelector('.form-profile__text-error');
const formProfileButton = formElement.querySelector('.form-profile__button');

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}


// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Закрытие попапа кликом на оверлей
profilePopup.addEventListener('mousedown', function (event) {
  if (event.target === profilePopup) {
    closePopup(popup);
  }
});

place.addEventListener('mousedown', function (event) {
  if (event.target === place) {
    closePopup(place);
  }
});

viewing.addEventListener('click', function (event) {
  if (event.target === viewing) {
    closePopup(viewing);
  }
});

// Закрытие попапа нажатием на Esc
document.addEventListener('keydown', (event) => {
  if (event.code === "Escape" && profilePopup.classList.contains('popup_opened')) {
    closePopup(popup);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === "Escape" && place.classList.contains('popup_opened')) {
    closePopup(place);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === "Escape" && viewing.classList.contains('popup_opened')) {
    closePopup(viewing);
  }
});

// открытие модального окна
openButton.addEventListener('click', function (event) {
  profileFormName.value = profileName.textContent;
  profileFormJob.value = profileText.textContent;
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

// Валидация формы

const showInputError = (formElement, formProfileText, errorMessage) => {
  const errorElement = formElement.querySelector(`.${formProfileText.id}-error`);
  if (formProfileText.textContent = '') {
    errorElement.textContent = formProfileTextError.textContent;
  } else
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, formProfileText) => {
  const errorElement = formElement.querySelector(`.${formProfileText.id}-error`);
  formProfileTextError.textContent = '';
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, formProfileText) => {
  if (!formProfileText.validity.valid) {
    showInputError(formElement, formProfileText, formProfileText.validationMessage);
  } else {
    hideInputError(formElement, formProfileText);
  }
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((formProfileText) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !formProfileText.validity.valid;
  })
};

const toggleButtonState = (inputList, formProfileButton) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    formProfileButton.disabled = true;
    formProfileButton.classList.add('form-profile__button_inactive');
  } else {
    // иначе сделай кнопку активной
    formProfileButton.disabled = false;
    formProfileButton.classList.remove('form-profile__button_inactive');
  }
};

const isValid = (formElement, formProfileText) => {
  if (formProfileText.validity.patternMismatch) {
    // данные атрибута доступны у элемента инпута через ключевое слово dataset.
    // обратите внимание, что в js имя атрибута пишется в camelCase (да-да, в
    // HTML мы писали в kebab-case, это не опечатка)
    formProfileText.setCustomValidity(formProfileText.dataset.errorMessage);
  } else {
    formProfileText.setCustomValidity('');
  }

  if (!formProfileText.validity.valid) {
    showInputError(formElement, formProfileText, formProfileText.validationMessage);
  } else {
    hideInputError(formElement, formProfileText);
  }
};

const setEventListeners = (formElement) => {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll('.form-profile__text'));
  inputList.forEach((formProfileText) => {
    formProfileText.addEventListener('input', () => {
      isValid(formElement, formProfileText);
      checkInputValidity(formElement, formProfileText);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, formProfileButton);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formElement);
  });
}

enableValidation();

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
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

initialCards.forEach(item => {
  addCard(item.link, item.name);
});

// открытие окна место

const placeContainer = place.querySelector('#place-container');
const placeClose = placeContainer.querySelector('#place-close');
const openButtonPlace = profile.querySelector('.profile__add-button');

openButtonPlace.addEventListener('click', function (event) {
  openPopup(place);
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

/* script.js */

// formProfileText.addEventListener('keydown', function (evt) {
//   // Проверяем, была ли введена цифра
//     if (Number.isNaN(Number(evt.key))) {
//     // Если пользователь ввёл не цифру, показываем блок с ошибкой
//     error.style.display = 'block';
//     };
// });