import templateFunction from './templates/card.hbs';
import { fetchGenres } from './js/fetchGenres';
const axios = require('axios').default;
const wraper = document.querySelector('.div');
import Notiflix from 'notiflix';
import fetchFilms from './js/fetchFilms';
import modal from './js/modal.js';
import { paginat } from './js/pagination';

// console.log(templateFunction({
//   cards: [
//     "Yehuda Katz",
//     "Alan Johnson",
//     "Charles Jolley",
//   ],
// }));
let currentPage = 1;

export async function renderFilms() {
  const films = await fetchFilms(currentPage);
  try {
    const render = films.results.map(item => {
      return getUser(item);
    });
    paginat.options.totalItems = films.total_results;
    paginat.options.totalPages = films.total_pages;
    console.log(render)
    const markup = templateFunction({
      cards: [
        ...render
      ]
    })
    wraper.insertAdjacentHTML('beforeend', markup);
    paginat.pagMake();
  }
  catch {
    console.error(error);
    Notiflix.Notify.failure('There is something wrong');
  }
}
renderFilms().then(r => {
modal()
})

function getUser(item) {
  //    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=28f59146d010acf01a886226973a360d');
  //    // console.log(response)
  //     const card = response.data.results[1]
  //     // console.log(card)
  const { poster_path, title, release_date, vote_average, genre_ids } = item;
  let raiting = vote_average.toFixed(1)
  let year = release_date.slice(0, 4);
  let newGenre = fetchGenres(genre_ids);
  return { poster_path, title, year, raiting, newGenre }
}

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