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

import { paginat } from './js/pagination';
import './js/top-button';
import formRegistration from './js/formRegistration';

//Змінні для пагінації
let currentPage = 1;

const wraper = document.querySelector('.div');

//Перший рендер
async function makeFirstMarkup(currentPage) {
  const films = await fetchFilms(currentPage);
  paginat.options.totalItems = films.total_results;
  paginat.options.totalPages = films.total_pages;
  const markup = await renderFilms(films);
  wraper.insertAdjacentHTML('beforeend', markup);
  paginat.pagMake(renderFilmsOnLoadMore);

     const galleryRef = document.querySelector('.film_list')
    galleryRef.addEventListener('click', openModal);
}
makeFirstMarkup(currentPage);
//   .then(r => {
//    const galleryRef = document.querySelector('.film_list')
//    galleryRef.addEventListener('click', openModal);
//  });

//Рендер при пошуку
const input = document.querySelector('#search-box')
input.addEventListener('input', debounce(makeSearchMarkup, 1000))
let searchText = ' ';
async function makeSearchMarkup(e) {
  e.preventDefault()

  searchText = e.target.value.trim()
  if (!searchText) {
    return
  }
  if (searchText.length < 3) {
    return Notiflix.Notify.info('Please enter at least 3 letters');
  }
  const films = await searchKeyword(searchText, 1);
  paginat.options.totalItems = films.total_results;
  paginat.options.totalPages = films.total_pages;
  if (films.length === 0) {
    return Notiflix.Notify.info('Oops, there is no film with that name');
  }
  const markup = await renderFilmsSearchKeyword(films)
  wraper.innerHTML = '';
  wraper.insertAdjacentHTML('beforeend', markup);
  paginat.pagMake(makeSearchMarkupOnLoadMore);

   const galleryRef = document.querySelector('.film_list')
    galleryRef.addEventListener('click', openModal);
}

// пагінація 2-ї та наспупних сторінок при рендері по пошуку
export async function makeSearchMarkupOnLoadMore(e) {
  currentPage = paginat.currentPage;
  const films = await searchKeyword(searchText, currentPage);
  const markup = await renderFilmsSearchKeyword(films);
  wraper.innerHTML = markup;

   const galleryRef = document.querySelector('.film_list')
   galleryRef.addEventListener('click', openModal);
}

// функція гернерує 2 і наступні сторінки
export async function renderFilmsOnLoadMore() {
  currentPage = paginat.currentPage;
  const films = await fetchFilms(currentPage);
  const markup = await renderFilms(films);
  wraper.innerHTML = markup;
    const galleryRef = document.querySelector('.film_list')
   galleryRef.addEventListener('click', openModal);
}



