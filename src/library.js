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


if (filterWatched === null && filterQueue === null){
  wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;
} else {
  wraper.insertAdjacentHTML('beforeend', markUpMovies(filterWatched));
  btnWatched.classList.add('button__header-active')
  btnWatched.disabled = true;
  
  const galleryRef = document.querySelector('.film_list');
 
  galleryRef.addEventListener('click', openModal);
}
btnWatched.addEventListener('click', makeRenderFromWatched);
btnQueue.addEventListener('click', makeRenderFromQueue);



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
  if (filterWatched !== null) {
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
  }

}

function makeRenderFromQueue() {
if (filterQueue != null) {
  wraper.innerHTML = ' ';
  wraper.insertAdjacentHTML('beforeend', markUpMovies(filterQueue));
  btnWatched.classList.remove('button__header-active')
  btnWatched.disabled = false;
  btnQueue.classList.add('button__header-active')
  btnQueue.disabled = true;
  }
  else {
    wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;
  }
  const galleryRef = document.querySelector('.film_list')
  galleryRef.addEventListener('click', openModal);
}

