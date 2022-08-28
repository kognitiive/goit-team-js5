import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import modalCard from '../templates/modal.hbs';

const galleryRef = document.querySelector('.film_list');
  galleryRef.addEventListener('click', openModal);

async  function makeMarkupModal(id) {
   const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=39e7639bbdd6f3ff4985c89cb032db66`)
  return {} = data.data;
}

const instance = basicLightbox.create(document.querySelector('#modal-window'));
instance.show();

async function openModal(e) {
  e.preventDefault();
  const modal = document.querySelector('.js-overlay-modal')

  const data = await makeMarkupModal(e.target.dataset.id)
  const markup = modalCard(data);
  modal.innerHTML = ''
  modal.classList.add('active');
  modal.insertAdjacentHTML('beforeend', markup)
}








