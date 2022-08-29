import Notiflix from 'notiflix';
import fetchFilms from './js/fetchFilms';
import { getUser } from './js/getUser';
import renderFilms from './js/renderFilms';
import fetchFilms from './js/fetchFilms';
import { paginat } from './js/pagination';
import templateFunction from './templates/card.hbs';
import { filter } from 'lodash';


const btnWatched = document.querySelector("#watched")
const btnQueue = document.querySelector("#queue")
const wraper = document.querySelector('.div');
const library = document.querySelector('.js-card-library');
const buttonContainer = document.querySelector('.button__container-header');
let currentPage = 1;

function markUpMovies(movies) {
  return movies.map(({id, poster_path, title, newGenre,year}) => {
    return `<ul class="film_list list>
    <li class="film_item list" data-action='${id}'>
        <a class="film-link link js-open-modal" data-modal="1">
            <img src=https://image.tmdb.org/t/p/w500${poster_path} alt="${title}" class="film_image" data-id="${id}"/>
        </a>
        <h1 class="film_title">${title}</h1>
        <p class="film_desc">${newGenre} | ${year}</p>
    </li>
</ul>`;
    })
        .join('');
}


const filterQueue = JSON.parse(localStorage.getItem('queueFilmsArray'));
console.log(filterQueue)

btnWatched.addEventListener('click', makeRenderFromLocalStorage);

function makeRenderFromLocalStorage() {
  const filterWatched = JSON.parse(localStorage.getItem('watchedFilmsArray'));
  wraper.insertAdjacentHTML('beforeend', markUpMovies(filterWatched));
}






// async function makewatchedFilmsMarkup(watchedFilms) {
//   const watchedFilms = await fetchFilms(currentPage);
//   paginat.options.totalItems = films.total_results;
//   paginat.options.totalPages = films.total_pages;
//   const markup = await renderFilms(films);
//   wraper.insertAdjacentHTML('beforeend', markup);
//   paginat.pagMake();
// }

//  async function makeWatchedFilmsMarkup() {

//   const markup = await renderFilms(filterWatched)
//   wraper.innerHTML = '';
//   wraper.insertAdjacentHTML('beforeend', markup);
// }

// makeWatchedFilmsMarkup()

// async function makeFirstMarkup(currentPage) {

//   const films = await fetchFilms(currentPage);
//   paginat.options.totalItems = films.total_results;
//   paginat.options.totalPages = films.total_pages;
//   const markup = await renderFilms(films);
//   wraper.insertAdjacentHTML('beforeend', markup);
//   paginat.pagMake(renderFilmsOnLoadMore);
// }

// makeFirstMarkup(currentPage).then(r => {
//   const galleryRef = document.querySelector('.film_list')
//   galleryRef.addEventListener('click', openModal);
// });





// btnWatched.addEventListener("click", renderFilms(filterWatched))
// // btnQueue.addEventListener("click", renderFilms(filterWatched))




