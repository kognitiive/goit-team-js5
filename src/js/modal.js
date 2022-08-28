import modalCard from '../templates/modal.hbs';
import makeMarkupModal from './makeMarkupModal';
import BasicLightbox from 'basiclightbox';


export default async function openModal(e) {
  e.preventDefault();
  console.log(e.target.dataset.id)
  
  const data = await makeMarkupModal(e.target.dataset.id)
  
  const markup = modalCard({ data });
  return markup
  const instance = BasicLightbox.create(`markup`)
//     {
//       onShow:(instance) => {window.addEventListener('keydown', openInstance)},
//       onClose:(instance) => {window.removeEventListener('keydown', openInstance)}
// }
  return instance.show();

  // closeButtons.forEach((item) => item.addEventListener('click', closeModal));
  // function closeModal(e) {
  // modal.close();
  //     };
}

// function modal () {

//   !function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);
//   // import modal from './templates/modal.hbs';

//     /* Записываем в переменные массив элементов-кнопок и подложку.
//         Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
//     const modalButtons = document.querySelectorAll('.js-open-modal'),
//       overlay = document.querySelector('.js-overlay-modal'),
//       closeButtons = document.querySelectorAll('.js-modal-close');

//     /* Перебираем массив кнопок */
//     modalButtons.forEach(function (item) {
//       /* Назначаем каждой кнопке обработчик клика */
//       item.addEventListener('click', function (e) {
//         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
//               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
//               Нужно подстраховаться. */
//         e.preventDefault();
//         const markup = makeMarkupModal(e.target.dataset.id)
//           .then(data => {
//             console.log(data)
//            modalWindow.insertAdjacentHTML('beforeend', modalCard(data));
//           });


//         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
//               и будем искать модальное окно с таким же атрибутом. */
//         const modalId = this.getAttribute('data-modal'),
//         modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

//         /* После того как нашли нужное модальное окно, добавим классы
//               подложке и окну чтобы показать их. */
//         modalElem.classList.add('active');
//         overlay.classList.add('active');
//       }); // end click
//     }); // end foreach

//     closeButtons.forEach(function (item) {
//       item.addEventListener('click', function (e) {
//         var parentModal = this.closest('.modal');

//         parentModal.classList.remove('active');
//         overlay.classList.remove('active');
//       });
//     }); // end foreach

//     document.body.addEventListener(
//       'keyup',
//       function (e) {
//         const key = e.keyCode;

//         if (key == 27) {
//           document.querySelector('.modal.active').classList.remove('active');
//           document.querySelector('.overlay.active').classList.remove('active');
//         }
//       },
//       false
//     );

//     overlay.addEventListener('click', function () {
//       document.querySelector('.modal.active').classList.remove('active');
//       this.classList.remove('active');
//     });
//}

//         /* После того как нашли нужное модальное окно, добавим классы
//               подложке и окну чтобы показать их. */
//         modalElem.classList.add('active');
//         overlay.classList.add('active');
//       }); // end click
//     }); // end foreach

//     closeButtons.forEach(function (item) {
//       item.addEventListener('click', function (e) {
//         var parentModal = this.closest('.modal');

//         parentModal.classList.remove('active');
//         overlay.classList.remove('active');
//       });
//     }); // end foreach

//     document.body.addEventListener(
//       'keyup',
//       function (e) {
//         const key = e.keyCode;

//         if (key == 27) {
//           document.querySelector('.modal.active').classList.remove('active');
//           document.querySelector('.overlay.active').classList.remove('active');
//         }
//       },
//       false
//     );

//     overlay.addEventListener('click', function () {
//       document.querySelector('.modal.active').classList.remove('active');
//       this.classList.remove('active');
//     });
// }
// Функция закрытия модалки по эскейпу
// function onKeyPress(event) {
//   if (event.code === 'Escape') {
//     onBtnCloseModalClick();
//   }
// }
// btnModalCloseEl.addEventListener('click', onBtnCloseModalClick);
// addEventListener('click', onOverlayClick);

// Функция закрытия модалки по клику на бекдроп
// document.querySelector('.overlay');
// function onOverlayClick(e) {
//   if (e.target === e.currentTarget) {
//     onBtnCloseModalClick();
//   }
// }
// // Функция закрытия модалки
// function onBtnCloseModalClick() {
//   backdropEl.classList.add('is-hidden');
//   window.removeEventListener('keydown', onKeyPress);
