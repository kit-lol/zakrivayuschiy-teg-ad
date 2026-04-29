/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = (e) => {
    e.preventDefault();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  };
});

likeButtonArray.forEach((button, index) => {
  button.onclick = (e) => {
    e.preventDefault();
    toggleIsLiked(likeHeartArray[index], button);
  };
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}

// Дополнительный код для кнопок "Сохранить на память" и "ОК"
const saveButton = document.querySelector('.save');
const okButton = document.querySelector('.dialog-button');

if (saveButton) {
  saveButton.onclick = (e) => {
    e.preventDefault();
    const dialog = document.querySelector('.dialog');
    if (dialog) {
      dialog.showModal();
    }
  };
}

if (okButton) {
  okButton.onclick = (e) => {
    e.preventDefault();
    const dialog = document.querySelector('.dialog');
    if (dialog) {
      dialog.close();
    }
  };
}
