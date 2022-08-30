import Notiflix from 'notiflix';
import fetchFilms from './js/fetchFilms';
import { getUser } from './js/getUser';
import renderFilms from './js/renderFilms';
import openModal  from './js/modal';
import fetchFilms from './js/fetchFilms';
import { paginat } from './js/pagination';
import templateFunction from './templates/card.hbs';
import { filter } from 'lodash';
import noPicture from './images/nopicture.jpg';

const btnWatched = document.querySelector("#watched")
const btnQueue = document.querySelector("#queue")
const wraper = document.querySelector('.film_library_list');
const filterWatched = JSON.parse(localStorage.getItem('watchedFilmsArray'));
const filterQueue = JSON.parse(localStorage.getItem('queueFilmsArray'));
const dateRelise = new Date()

btnWatched.addEventListener('click', makeRenderFromWatched);
btnQueue.addEventListener('click', makeRenderFromQueue);
if (filterWatched === null || filterQueue === null || filterWatched.length === 0){
  wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;
} else {
  makeRenderFromWatched()
}




const backdrop = document.querySelector('.js-overlay-modal');

let currentPage = 1;
 
 function markUpMovies(movies) {
   return movies.map(({id, poster_path, title, genres, release_date}) => {
     return `
     <li class="film_item list" data-action='${id}'>
        <a class="film-link link js-open-modal" data-modal="1">
            <img src=https://image.tmdb.org/t/p/w500${poster_path} alt="${title}" class="film_image" data-id="${id}"/>
         </a>
         <h1 class="film_title">${title}</h1>
         <p class="film_desc">${genres.map(genre => genre.name)} | ${dateRelise.getFullYear(release_date)}</p>
     </li>
 `;
     })
         .join('');
 }



function makeRenderFromWatched() {
  if (filterWatched !== null && filterWatched.length !== 0) {
  wraper.innerHTML = ' ';
  wraper.insertAdjacentHTML('beforeend', markUpMovies(filterWatched));
  const galleryRef = document.querySelector('.film_list');
  galleryRef.addEventListener('click', openModal);
  btnWatched.classList.add('button__header-active')
  btnWatched.disabled = true;
  btnQueue.classList.remove('button__header-active')
  btnQueue.disabled = false;
}
  else {
  
    wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;
    btnWatched.classList.add('button__header-active')
    btnWatched.disabled = true;
    btnQueue.classList.remove('button__header-active')
    btnQueue.disabled = false;
  }

}

function makeRenderFromQueue() {
if (filterQueue !== null && filterQueue.length !== 0) {
  wraper.innerHTML = ' ';
  wraper.insertAdjacentHTML('beforeend', markUpMovies(filterQueue));
  btnQueue.classList.add('button__header-active')
  btnQueue.disabled = true;
  btnWatched.classList.remove('button__header-active')
  btnWatched.disabled = false;
  }
  else {
    wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;
    btnQueue.classList.add('button__header-active')
    btnQueue.disabled = true;
    btnWatched.classList.remove('button__header-active')
    btnWatched.disabled = false;
  }
  const galleryRef = document.querySelector('.film_list')
  galleryRef.addEventListener('click', openModal);
}

