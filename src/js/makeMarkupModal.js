import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import modalCard from '../templates/modal.hbs';

const galleryRef = document.querySelector('.film_list');
const backdrop = document.querySelector('.window-backdrop');
const modalBtnClose = document.querySelector('.js-modal-close');
  galleryRef.addEventListener('click', openModal);

async  function makeMarkupModal(id) {
   const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=39e7639bbdd6f3ff4985c89cb032db66`)
  return {} = data.data;
}

 const instance = basicLightbox.create(document.querySelector('#modal-window'),
 {
    onShow: () => {
       backdrop.classList.add('.active');
       window.addEventListener('keydown', onEscapeButtonClick);
       backdrop.addEventListener('click', onBackDropClick);
       modalBtnClose.addEventListener('click', onModalBtnClose)
     },
     onClose: () => {
       window.removeEventListener('keydown', onEscapeButtonClick);
       backdrop.removeEventListener('click', onBackDropClick);
       modalBtnClose.removeEventListener('click', onModalBtnClose);
     }
   });

 instance.show();

async function openModal(e) {
  e.preventDefault();
   const modal = document.querySelector('.window-backdrop')

  const data = await makeMarkupModal(e.target.dataset.id)
  const markup = modalCard(data);
  modal.innerHTML = ''
   modal.classList.add('active');
   modal.insertAdjacentHTML('beforeend', markup)
}

function onEscapeButtonClick(e) {
  if (e.code === 'Escape') {
    backdrop.classList.remove('.active');
          instance.close();
        }
}
function onBackDropClick(e) {
  backdrop.classList.remove('.active');
  instance.close();
}
function onModalBtnClose(e) {
 backdrop.classList.remove('.active');
  instance.close();
}








