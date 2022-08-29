import modalCard from '../templates/modal.hbs';
import makeMarkupModal from './makeMarkupModal';
import * as basicLightBox from 'basiclightbox';


export default async function openModal(e) {
  e.preventDefault();
  const backdrop = document.querySelector('.js-overlay-modal')

  const data = await makeMarkupModal(e.target.dataset.id)
  const markup = modalCard(data);
  backdrop.innerHTML = ''
  // modal.classList.add('active');
  backdrop.insertAdjacentHTML('beforeend', markup)
  const modalBtnClose = document.querySelector('.js-modal-close');
  const modal = document.querySelector('.modal')
  const instance = basicLightBox.create(document.querySelector('#modal-window'),
    {
    onShow: (instance) => {
      // instance.element().querySelector('.js-overlay-modal').onclick = backdrop
        
        backdrop.classList.add('active')
        modal.classList.add('active')
        
      
      window.addEventListener('keydown', onEscapeButtonClick);
      backdrop.addEventListener('click', onBackDropClick);
      modalBtnClose.addEventListener('click', onModalBtnClose)
    },
    onClose:  (instance) => {
      window.removeEventListener('keydown', onEscapeButtonClick);
      backdrop.removeEventListener('click', onBackDropClick);
      modalBtnClose.removeEventListener('click', onModalBtnClose);
      }
    });
  function onEscapeButtonClick(e) {
  if (e.code === 'Escape') {
    backdrop.classList.remove('active');
    modal.classList.remove('active')
          instance.close();
        }
}
function onBackDropClick(e) {
  backdrop.classList.remove('active');
  modal.classList.remove('active')
  instance.close();
}
function onModalBtnClose(e) {
  backdrop.classList.remove('active');
  modal.classList.remove('active')
  instance.close();
}

  instance.show();
//     {
//       onShow:(instance) => {window.addEventListener('keydown', openInstance)},
//       onClose:(instance) => {window.removeEventListener('keydown', openInstance)}
// }
  

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
