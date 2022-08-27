import templateFunction from './templates/card.hbs';
import { fetchGenres } from './js/fetchGenres';
const axios = require('axios').default;
const wraper = document.querySelector('.div');
import Notiflix from 'notiflix';
import fetchFilms from './js/fetchFilms';
import modal from './js/modal.js';
import { searchKeyword } from './js/apiSearchKeyword'
import { modalGoIT } from './js/modal-go-it';
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
  const { poster_path, title, release_date, vote_average, genre_ids, id } = item;
  let raiting = vote_average.toFixed(1)
  let year = release_date.slice(0, 4);
  let newGenre = fetchGenres(genre_ids);
  return { poster_path, title, year, raiting, newGenre, id }
}





import debounce from 'lodash.debounce';

const input = document.querySelector('.input')
input.addEventListener('input', debounce(onInputForm, 1000))

function onInputForm(e) {
  e.preventDefault()
  wraper.innerHTML = '';
  const searchText = input.value.trim()
  if (!searchText) {
    renderFilms()
    return
  }
  async function renderFilmsSearchKeyword() {
    const films = await searchKeyword(searchText);
    if (films.length === 0) {
      Notiflix.Notify.info('Oops, there is no film with that name');
      renderFilms()
    }
    try {
      const render = films.map(item => { return getUser(item) });
      const markup = templateFunction({
        cards: [
          ...render
        ]
      })
      wraper.insertAdjacentHTML('beforeend', markup);
    }
    catch {
      console.error(error);
      Notiflix.Notify.failure('There is something wrong');
    }
  }
  renderFilmsSearchKeyword()
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