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

// Находим форму в DOM
const formElement = popupContainer.querySelector('[name="form-profile"]');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('[name="name"]');
const jobInput = formElement.querySelector('[name="speсial"]');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    jobInput.value;
    nameInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
const speсial = formElement.querySelector('#speсial');
const name = formElement.querySelector('#name');
    // Вставьте новые значения с помощью textContent
    speсial.textContent = jobInput.value;
    name.textContent = nameInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);