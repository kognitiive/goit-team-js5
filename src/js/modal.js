
import modalCard from '../templates/modal.hbs';
import makeMarkupModal from './makeMarkupModal';
import BasicLightBox  from 'basiclightbox';

  var modalButtons = document.querySelectorAll('.js-open-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');


modalButtons.forEach((item) => item.addEventListener('click', openModal));


function openModal(e) {
 e.preventDefault();
      const markup = makeMarkupModal(e.target.dataset.id)
        .then(data => {
          const markUpCard = modalCard(data);
          const modal = BasicLightBox.create(markUpCard);
          modal.show();

          closeButtons.forEach((item) => item.addEventListener('click', closeModal));
          function closeModal(e) {
            modal.close();
}
        });

}



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
//         var key = e.keyCode;

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
// }