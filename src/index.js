import axios from 'axios';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import * as basicLightBox from 'basiclightbox';

import renderFilms from './js/renderFilms';
import fetchFilms from './js/fetchFilms';
import openModal from './js/modal.js';
import { searchKeyword } from "./js/apiSearchKeyword";
import { renderFilmsSearchKeyword } from './js/renderFilmsSearchKeyword';
import modalGoIT from './js/modal-go-it';
import { paginat } from './js/pagination'
import './js/top-button'


const wraper = document.querySelector('.div');


let currentPage = 1;


//Перший рендер

async function makeFirstMarkup(currentPage) {
  const films = await fetchFilms(currentPage);
  paginat.options.totalItems = films.total_results;
  paginat.options.totalPages = films.total_pages;
  const markup = await renderFilms(films);
  wraper.insertAdjacentHTML('beforeend', markup);
  paginat.pagMake();
}

makeFirstMarkup(currentPage);
//   .then(r => {
//   modal()
// });
const backdrop = document.querySelector('.window-backdrop');
const modalBtnClose = document.querySelector('.js-modal-close');
  const galleryRef = document.querySelector('.film_list')
  galleryRef.addEventListener('click', openModal);
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


//Рендер при пошуку
const input = document.querySelector('#search-box')
input.addEventListener('input', debounce(makeSearchMarkup, 1000))

async function makeSearchMarkup(e) {
  e.preventDefault()
    const searchText = e.target.value.trim()
    if (!searchText) {
      return
    }
    if (searchText.length < 3) {
      return Notiflix.Notify.info('Please enter at least 3 letters');
    } 
  const films = await searchKeyword(searchText);
    if (films.length === 0) {
     return Notiflix.Notify.info('Oops, there is no film with that name');
    }
  const markup = await renderFilmsSearchKeyword(films)
  wraper.innerHTML = '';
  wraper.insertAdjacentHTML('beforeend', markup);
}


// функція гернерує 2 і наступні сторінки
export async function renderFilmsOnLoadMore() {
  currentPage = paginat.currentPage;
  const films = await fetchFilms(currentPage);
  const markup = await renderFilms(films);
  wraper.innerHTML = markup;
}

//----спроба записати інфо в локал сторедж при кліці на картинку фільму
// ----та перевірити чи вона вже є в локалі
//---- код можна буде видалити

const cardFromModal = document.querySelector('#list-container')
cardFromModal.addEventListener('click', addToLocalStorage)

const chooseFilmsArray = [];

function addToLocalStorage(event) {
  const chooseFilm = {
    src: event.target.src,
    alt: event.target.alt
  }
  if (localStorage.getItem("chooseFilmsArray") === null) {
    console.log('Локалсторидж пустий, пушимо інфо...')
    chooseFilmsArray.push(chooseFilm)
    localStorage.setItem("chooseFilmsArray", JSON.stringify(chooseFilmsArray))
  } else {
    console.log(localStorage.getItem("chooseFilmsArray"))
    infoInLocal = JSON.parse(localStorage.getItem("chooseFilmsArray"))
    const audit = infoInLocal.find((arr) => arr.alt === event.target.alt)
    console.log(audit)
    if (audit) {
      console.log('Такий фільм вже є...')
    } else {
      chooseFilmsArray.push(chooseFilm)
      localStorage.setItem("chooseFilmsArray", JSON.stringify(chooseFilmsArray))
    }
  }
}
