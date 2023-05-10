import {closePopup} from './utils.js';

const profilePopup = document.querySelector('.profile-popup');
const formElement = document.querySelector('.form');
const formElements = document.querySelectorAll('.form');
// const formProfileText = formElement.querySelector('.form-profile__text');
// const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт
const formProfileTextError = document.querySelector('.form-profile__text-error');
const formProfileButton = document.querySelector('.form-profile__button');
const profileFormName = document.querySelector('[name="name"]');
const profileFormJob = document.querySelector('[name="speсial"]');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const formProfileButtons = formElement.querySelectorAll('.form-profile__button');

// функция, которая делает ошибку видимой
const showInputError = (formElement, formProfileText, errorMessage) => {
    const errorElement = formElement.querySelector(`.${formProfileText.id}-error`);
    if (formProfileText.textContent = '') {
      errorElement.textContent = formProfileTextError.textContent;
    } else
      errorElement.textContent = errorMessage;
  };
  
  // функция, которая делает ошибку невидимой
  const hideInputError = (formElement, formProfileText) => {
    const errorElement = formElement.querySelector(`.${formProfileText.id}-error`);
    errorElement.textContent = '';
  };
  
    // функция, которая показывает или скрывает ошибки
  const checkInputValidity = (formElement, formProfileText) => {
    if (!formProfileText.validity.valid) {
      showInputError(formElement, formProfileText, formProfileText.validationMessage);
    } else {
      hideInputError(formElement, formProfileText);
    }
  };
  
    // функция, которая проверяет валидность поля
  const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((formProfileText) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !formProfileText.validity.valid;
    })
  };
  
      // функция, которая контролирует активность кнопки Сохранить
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
          }   
  
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
    };
  
  function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
        setEventListeners(formElement);
    });
  }

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

  export {enableValidation, submitProfileForm};


//   const toggleButtonState = (inputList, formProfileButton) => {
//     // Если есть хотя бы один невалидный инпут
//     if (hasInvalidInput(inputList)) {
//       // сделай кнопку неактивной
//       formProfileButton.disabled = true;
//       formProfileButton.classList.add('form-profile__button_inactive');
//     } else {
//       // иначе сделай кнопку активной
//       formProfileButton.disabled = false;
//       formProfileButton.classList.remove('form-profile__button_inactive');
//     }
//   };
  
// const setEventListeners = (formElement) => {
//   // Найдём все поля формы и сделаем из них массив
//   const inputList = Array.from(formElement.querySelectorAll('.form-profile__text'));
//   inputList.forEach((formProfileText) => {
//     formProfileText.addEventListener('input', () => {
//       isValid(formElement, formProfileText);
//       checkInputValidity(formElement, formProfileText);
//       // Вызовем toggleButtonState и передадим ей массив полей и кнопку
//       toggleButtonState(inputList, formProfileButton);
//     });
//   });
// }
