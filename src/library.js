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
const wraper = document.querySelector('.div');
const backdrop = document.querySelector('.js-overlay-modal');

let currentPage = 1;

  wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;

 function markUpMovies(movies) {
   return movies.map(({id, poster_path, title, newGenres,year}) => {
     return `<ul class="film_list list">
     <li class="film_item list" data-action='${id}'>
        <a class="film-link link js-open-modal" data-modal="1">
            <img src=https://image.tmdb.org/t/p/w500${poster_path} alt="${title}" class="film_image" data-id="${id}"/>
         </a>
         <h1 class="film_title">${title}</h1>
         <p class="film_desc">${newGenres} | ${year}</p>
     </li>
 </ul>`;
     })
         .join('');
 }

btnWatched.addEventListener('click', makeRenderFromWatched);
btnQueue.addEventListener('click', makeRenderFromQueue);

function makeRenderFromWatched() {
  const filterWatched = JSON.parse(localStorage.getItem('watchedFilmsArray'));
  if (filterWatched != null) {
  wraper.innerHTML = ' ';
  wraper.insertAdjacentHTML('beforeend', markUpMovies(filterWatched));
  }
  else {
    wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;
  }
  const galleryRef = document.querySelector('.film_list');
  galleryRef.addEventListener('click', openModal);
}

function makeRenderFromQueue() {
const filterQueue = JSON.parse(localStorage.getItem('queueFilmsArray'));
if (filterQueue != null) {
  wraper.innerHTML = ' ';
  wraper.insertAdjacentHTML('beforeend', markUpMovies(filterQueue));
  }
  else {
    wraper.innerHTML = `<img src="${noPicture}" alt="Frai speaking" />`;
  }
  const galleryRef = document.querySelector('.film_list')
  galleryRef.addEventListener('click', openModal);
}

