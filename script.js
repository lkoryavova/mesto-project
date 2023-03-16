const page = document.querySelector('.page');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');
const profileContainer = profile.querySelector('.profile__container');
const profileInfo = profileContainer.querySelector('.profile__info');
const profileNameConteiner = profileInfo.querySelector('.profile__name-conteiner');
const openButton = profileNameConteiner.querySelector('.profile__edit-button');

openButton.addEventListener('click', function (event) {
  console.log('Произошло событие', event.type);
});
