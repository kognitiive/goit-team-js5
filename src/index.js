import axios from 'axios';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { BasicLightBox } from 'basiclightbox';

import { renderFilms } from './js/renderFilms';
import fetchFilms from './js/fetchFilms';
import modal from './js/modal.js';
import { renderFilmsSearchKeyword } from './js/renderFilmsSearchKeyword';
import { modalGoIT } from './js/modal-go-it';
import { paginat } from './js/pagination'


const wraper = document.querySelector('.div');

let currentPage = 1;

//Перший рендер
async function makeMarkup(currentPage) { 
  const films = await fetchFilms(currentPage);
  paginat.options.totalItems = films.total_results;
  paginat.options.totalPages = films.total_pages;
  markup = await renderFilms(films);
  wraper.insertAdjacentHTML('beforeend', markup);
  paginat.pagMake();
} 

makeMarkup(currentPage).then(r => modal());

//Рендер при пошуку
const input = document.querySelector('.input')
input.addEventListener('input', debounce(renderFilmsSearchKeyword, 1000))


// функція гернерує 2 і наступні сторінки
export async function renderFilmsOnLoadMore() {
  currentPage = paginat.currentPage;
  const films = await fetchFilms(currentPage);
  try {
    const render = films.results.map(item => {
      return getUser(item);
    });
    const markup = templateFunction({
      cards: [...render],
    });
    wraper.innerHTML = markup;
  } catch {
    console.error(error);
    Notiflix.Notify.failure('There is something wrong');
  }
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
  if (localStorage.getItem("chooseFilmsArray") === null){
    console.log('Локалсторидж пустий, пушимо інфо...')
    chooseFilmsArray.push(chooseFilm)
    localStorage.setItem("chooseFilmsArray", JSON.stringify(chooseFilmsArray))
  } else{
    console.log(localStorage.getItem("chooseFilmsArray"))
    infoInLocal = JSON.parse(localStorage.getItem("chooseFilmsArray"))
    const audit = infoInLocal.find((arr) => arr.alt === event.target.alt)
    console.log(audit)
    if(audit){
      console.log('Такий фільм вже є...')
    } else {
      chooseFilmsArray.push(chooseFilm)
      localStorage.setItem("chooseFilmsArray", JSON.stringify(chooseFilmsArray))
    }
  }
  }
