import Notiflix from 'notiflix';
import fetchFilms from './js/fetchFilms';
import { getUser } from './js/getUser';
import renderFilms from './js/renderFilms';
import fetchFilms from './js/fetchFilms';
import { paginat } from './js/pagination'
import openModal from './js/modal'

let currentPage = 1

const btnWatched = document.querySelector("#watched")
const btnQueue = document.querySelector("#queue")
const wraper = document.querySelector('.div');


const filterWatched = JSON.parse(localStorage.getItem('watchedFilmsArray'));
console.log(filterWatched)
const filterQueue = JSON.parse(localStorage.getItem('queueFilmsArray'));
console.log(filterQueue)

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

async function makeFirstMarkup(currentPage) {

  const films = filterWatched;
  if (!films) { return Notiflix.Notify.info("You don't have any films at WATCHED")}
  // paginat.options.totalItems = films.total_results;
  // paginat.options.totalPages = films.total_pages;
  const markup = await renderFilms(films);
  wraper.insertAdjacentHTML('beforeend', markup);
  // paginat.pagMake(renderFilmsOnLoadMore);
}

makeFirstMarkup(currentPage).then(r => {
  const galleryRef = document.querySelector('.film_list')
  galleryRef.addEventListener('click', openModal);
});





btnWatched.addEventListener("click", renderFilms(filterWatched))
// btnQueue.addEventListener("click", renderFilms(filterWatched))




