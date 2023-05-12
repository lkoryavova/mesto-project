/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardGallery\": () => (/* binding */ cardGallery),\n/* harmony export */   \"submitCardForm\": () => (/* binding */ submitCardForm)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst elements = document.querySelector('.elements');\n// const inputsCardForm = cardForm.querySelectorAll('#place-name, #place-way');\nconst inputsCardForm = document.querySelectorAll('#place-name, #place-way');\nconst placeViewingImage = document.querySelector('.place-viewing__image');\nconst placeViewingCaption = document.querySelector('.place-viewing__caption');\nconst viewingContainer = viewing.querySelector('.viewing-container');\nconst viewingClose = viewingContainer.querySelector('#viewing-close');\nconst placeName = document.querySelector('#place-name');\nconst placeWay = document.querySelector('#place-way');\nconst initialCards = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\n\n// Добавляем карточки на страницу\n\nfunction createCard(link, name) {\n  const cardTemplate = document.querySelector('#card-template').content;\n  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);\n  const elementImage = cardElement.querySelector('.element__image');\n  const elementSignature = cardElement.querySelector('.element__signature');\n  const elementName = elementSignature.querySelector('.element__name');\n  elementImage.src = `${link}`;\n  elementName.textContent = `${name}`;\n  elementImage.alt = `${name}`;\n\n  // Лайк карточки\n  const elementChoice = elementSignature.querySelector('.element__choice');\n  elementChoice.addEventListener('click', function (event) {\n    event.target.classList.toggle('element__choice_active');\n    console.log(\"Лайк карточки\");\n  });\n  // Удаление карточки\n  const elementDelete = cardElement.querySelector('.element__delete');\n  elementDelete.addEventListener('click', function (event) {\n    const listItem = elementDelete.closest('.element');\n    console.log(\"Удаление карточки\");\n    listItem.remove();\n  });\n\n  //Открытие попапа с картинкой\n  elementImage.addEventListener('click', function (event) {\n    placeViewingImage.src = `${link}`;\n    placeViewingImage.alt = `${name}`;\n    placeViewingCaption.textContent = `${name}`;\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(viewing);\n  });\n  return cardElement;\n}\nconst addCard = function (link, name) {\n  elements.append(createCard(link, name));\n};\nconst cardGallery = initialCards.forEach(item => {\n  addCard(item.link, item.name);\n});\n\n// Добавление карточки пользователем\n// Обработчик «отправки» формы, хотя пока\n// она никуда отправляться не будет\nfunction submitCardForm(evt) {\n  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.\n  // Так мы можем определить свою логику отправки.\n  // О том, как это делать, расскажем позже.\n\n  // Получите значение полей placeName и placeWay из свойства value\n  const placeNameValue = placeName.value;\n  const placeWayValue = placeWay.value;\n  const addNewCard = function (link, name) {\n    if (link !== \"\" && name !== \"\") {\n      elements.prepend(createCard(link, name));\n    }\n  };\n  addNewCard(placeWayValue, placeNameValue);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(place);\n  // очищаем инпуты\n  evt.target.reset();\n}\n\n\n//# sourceURL=webpack://scripts/./src/card.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popup\": () => (/* binding */ popup)\n/* harmony export */ });\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate.js */ \"./src/validate.js\");\nconst popup = document.querySelector('.popup');\nconst profileForm = document.forms[\"form-profile\"];\nconst cardForm = document.forms[\"card-form\"];\n\n// Добавляем карточки на страницу\n\n_card_js__WEBPACK_IMPORTED_MODULE_0__.cardGallery;\n// Прикрепляем обработчик к форме:\n// он будет следить за событием “submit” - «отправка»\ncardForm.addEventListener('submit', _card_js__WEBPACK_IMPORTED_MODULE_0__.submitCardForm);\n\n// Модальные окна\n\n_modal_js__WEBPACK_IMPORTED_MODULE_1__.clickPopupClose;\n_modal_js__WEBPACK_IMPORTED_MODULE_1__.clickEscapePopup;\n_modal_js__WEBPACK_IMPORTED_MODULE_1__.openProfile;\n_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeButtons;\n\n// Валидация формы\n\n(0,_validate_js__WEBPACK_IMPORTED_MODULE_2__.enableValidation)();\n\n// Прикрепляем обработчик к форме:\n// он будет следить за событием “submit” - «отправка»\nprofileForm.addEventListener('submit', _validate_js__WEBPACK_IMPORTED_MODULE_2__.submitProfileForm);\nconsole.log('Hello, World');\nconst numbers = [2, 3, 5];\n\n// Стрелочная функция. Не запнётся ли на ней Internet Explorer?\nconst doubledNumbers = numbers.map(number => number * 2);\nconsole.log(doubledNumbers); // 4, 6, 10\n\n//# sourceURL=webpack://scripts/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickEscapePopup\": () => (/* binding */ clickEscapePopup),\n/* harmony export */   \"clickPopupClose\": () => (/* binding */ clickPopupClose),\n/* harmony export */   \"closeButtons\": () => (/* binding */ closeButtons),\n/* harmony export */   \"openPlace\": () => (/* binding */ openPlace),\n/* harmony export */   \"openProfile\": () => (/* binding */ openProfile)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst page = document.querySelector('.page');\nconst content = page.querySelector('.content');\nconst profile = content.querySelector('.profile');\nconst profileContainer = profile.querySelector('.profile__container');\nconst profileInfo = profileContainer.querySelector('.profile__info');\nconst profileText = profileInfo.querySelector('.profile__text');\nconst profileNameConteiner = profileInfo.querySelector('.profile__name-conteiner');\nconst profileName = profileNameConteiner.querySelector('.profile__name');\nconst profilePopup = page.querySelector('.profile-popup');\nconst place = page.querySelector('#place');\nconst openButton = profileNameConteiner.querySelector('.profile__edit-button');\nconst profileForm = document.forms[\"form-profile\"];\nconst profileFormJob = profileForm.querySelector('[name=\"speсial\"]');\nconst profileFormName = profileForm.querySelector('[name=\"name\"]');\nconst popups = document.querySelectorAll('.popup');\nconst openButtonPlace = document.querySelector('.profile__add-button');\nconst placeButton = document.querySelector('#place-button');\n\n// открытие окна Редактирования профиля\nconst openProfile = openButton.addEventListener('click', function () {\n  profileFormName.value = profileName.textContent;\n  profileFormJob.value = profileText.textContent;\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(profilePopup);\n});\n\n// Открытие окна Новое место\nconst openPlace = openButtonPlace.addEventListener('click', function () {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.inactiveButton)(placeButton);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(place);\n});\n\n// закрытие попапа кликом на оверлей\nconst clickPopupClose = popups.forEach(popup => {\n  // находим 1 раз ближайший к крестику попап \n  popup.addEventListener('mousedown', function (event) {\n    if (event.target === popup) {\n      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(popup);\n    }\n  });\n});\n\n// закрытие попапа клавишей \"Escape\"\nconst clickEscapePopup = popups.forEach(popup => {\n  document.addEventListener('keydown', event => {\n    if (event.code === \"Escape\" && popup.classList.contains('popup_opened')) {\n      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(popup);\n    }\n  });\n});\n\n// закрытие попапа нажатием на крестик\n// находим все крестики проекта по универсальному селектору\nconst closeButtons = document.querySelectorAll('.popup__close');\n\n// с окончанием `s` нужно обязательно, так как много кнопок\ncloseButtons.forEach(button => {\n  // находим 1 раз ближайший к крестику попап \n  const popup = button.closest('.popup');\n  // устанавливаем обработчик закрытия на крестик\n  button.addEventListener('click', () => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(popup));\n});\n\n\n//# sourceURL=webpack://scripts/./src/modal.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeButton\": () => (/* binding */ activeButton),\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"inactiveButton\": () => (/* binding */ inactiveButton),\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup)\n/* harmony export */ });\n// Функция открытия попапа\nfunction openPopup(popup) {\n  popup.classList.add('popup_opened');\n}\n\n// Функция закрытия попапа\nfunction closePopup(popup) {\n  popup.classList.remove('popup_opened');\n}\n\n// Функция делающая кнопку сохранить активной\nfunction activeButton(formProfileButton) {\n  formProfileButton.classList.remove('form-profile__button_inactive');\n}\n\n// Функция делающая кнопку сохранить неактивной\nfunction inactiveButton(formProfileButton) {\n  formProfileButton.classList.add('form-profile__button_inactive');\n}\n\n\n//# sourceURL=webpack://scripts/./src/utils.js?");

/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableValidation\": () => (/* binding */ enableValidation),\n/* harmony export */   \"submitProfileForm\": () => (/* binding */ submitProfileForm)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst profilePopup = document.querySelector('.profile-popup');\nconst formElement = document.querySelector('.form');\nconst formElements = document.querySelectorAll('.form');\n// const formProfileText = formElement.querySelector('.form-profile__text');\n// const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт\nconst formProfileTextError = document.querySelector('.form-profile__text-error');\nconst formProfileButton = formElement.querySelector('.form-profile__button');\nconst placeButton = document.querySelector('#place-button');\nconst profileFormName = document.querySelector('[name=\"name\"]');\nconst profileFormJob = document.querySelector('[name=\"speсial\"]');\nconst profileName = document.querySelector('.profile__name');\nconst profileText = document.querySelector('.profile__text');\nconst formProfileButtons = formElement.querySelectorAll('.form-profile__button');\n\n// функция, которая делает ошибку видимой\nconst showInputError = (formElement, formProfileText, errorMessage) => {\n  const errorElement = formElement.querySelector(`.${formProfileText.id}-error`);\n  if (formProfileText.textContent = '') {\n    errorElement.textContent = formProfileTextError.textContent;\n  } else errorElement.textContent = errorMessage;\n};\n\n// функция, которая делает ошибку невидимой\nconst hideInputError = (formElement, formProfileText) => {\n  const errorElement = formElement.querySelector(`.${formProfileText.id}-error`);\n  errorElement.textContent = '';\n};\n\n// функция, которая показывает или скрывает ошибки\nconst checkInputValidity = (formElement, formProfileText) => {\n  if (!formProfileText.validity.valid) {\n    showInputError(formElement, formProfileText, formProfileText.validationMessage);\n  } else {\n    hideInputError(formElement, formProfileText);\n  }\n};\n\n// функция, которая проверяет валидность поля\nconst hasInvalidInput = inputList => {\n  // проходим по этому массиву методом some\n  return inputList.some(formProfileText => {\n    // Если поле не валидно, колбэк вернёт true\n    // Обход массива прекратится и вся функция\n    // hasInvalidInput вернёт true\n\n    return !formProfileText.validity.valid;\n  });\n};\n\n// функция, которая контролирует активность кнопки Сохранить\nconst toggleButtonState = (inputList, formProfileButton) => {\n  // Если есть хотя бы один невалидный инпут\n  if (hasInvalidInput(inputList)) {\n    // сделай кнопку неактивной\n    formProfileButton.disabled = true;\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.inactiveButton)(formProfileButton);\n  } else {\n    // иначе сделай кнопку активной\n    formProfileButton.disabled = false;\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.activeButton)(formProfileButton);\n  }\n};\nconst isValid = (formElement, formProfileText) => {\n  if (formProfileText.validity.patternMismatch) {\n    // данные атрибута доступны у элемента инпута через ключевое слово dataset.\n    // обратите внимание, что в js имя атрибута пишется в camelCase (да-да, в\n    // HTML мы писали в kebab-case, это не опечатка)\n    formProfileText.setCustomValidity(formProfileText.dataset.errorMessage);\n  } else {\n    formProfileText.setCustomValidity('');\n  }\n  if (!formProfileText.validity.valid) {\n    showInputError(formElement, formProfileText, formProfileText.validationMessage);\n  } else {\n    hideInputError(formElement, formProfileText);\n  }\n};\nconst setEventListeners = formElement => {\n  // Найдём все поля формы и сделаем из них массив\n  const inputList = Array.from(formElement.querySelectorAll('.form-profile__text'));\n  inputList.forEach(formProfileText => {\n    formProfileText.addEventListener('input', () => {\n      isValid(formElement, formProfileText);\n      checkInputValidity(formElement, formProfileText);\n      // Вызовем toggleButtonState и передадим ей массив полей и кнопку\n      toggleButtonState(inputList, formProfileButton);\n      toggleButtonState(inputList, placeButton);\n    });\n  });\n};\nfunction enableValidation() {\n  const formList = Array.from(document.querySelectorAll('.form'));\n  formList.forEach(formElement => {\n    formElement.addEventListener('submit', evt => {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement);\n  });\n}\n\n// Функция принимает массив полей ввода\n// и элемент кнопки, состояние которой нужно менять\n// Поля формы\n// Обработчик «отправки» формы, хотя пока\n// она никуда отправляться не будет\nfunction submitProfileForm(evt) {\n  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.\n  // Так мы можем определить свою логику отправки.\n  // О том, как это делать, расскажем позже.\n\n  // Получите значение полей jobInput и nameInput из свойства value\n  const nameInput = profileFormName.value;\n  const jobInput = profileFormJob.value;\n  // Вставьте новые значения с помощью textContent\n  if (nameInput !== \"\" && jobInput !== \"\") {\n    profileName.textContent = nameInput;\n    profileText.textContent = jobInput;\n  }\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(profilePopup); // Автоматическое закрытие попапа\n}\n\n\n\n//   const toggleButtonState = (inputList, formProfileButton) => {\n//     // Если есть хотя бы один невалидный инпут\n//     if (hasInvalidInput(inputList)) {\n//       // сделай кнопку неактивной\n//       formProfileButton.disabled = true;\n//       formProfileButton.classList.add('form-profile__button_inactive');\n//     } else {\n//       // иначе сделай кнопку активной\n//       formProfileButton.disabled = false;\n//       formProfileButton.classList.remove('form-profile__button_inactive');\n//     }\n//   };\n\n// const setEventListeners = (formElement) => {\n//   // Найдём все поля формы и сделаем из них массив\n//   const inputList = Array.from(formElement.querySelectorAll('.form-profile__text'));\n//   inputList.forEach((formProfileText) => {\n//     formProfileText.addEventListener('input', () => {\n//       isValid(formElement, formProfileText);\n//       checkInputValidity(formElement, formProfileText);\n//       // Вызовем toggleButtonState и передадим ей массив полей и кнопку\n//       toggleButtonState(inputList, formProfileButton);\n//     });\n//   });\n// }\n\n// const buttonList = Array.from(formElement.querySelectorAll('.form-profile__button'));\n\n// buttonList.forEach((formProfileButton) => {\n\n//# sourceURL=webpack://scripts/./src/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;