import modalCard from './templates/modal.hbs';
// // Змінна для фільму, який відкритий в модалці
// let curFilm;



const cardModal = document.querySelector('.film_list');

// / export default function modalFetch(id) {
// const url = `https://api.themoviedb.org/3/movie/${id}?api_key=39e7639bbdd6f3ff4985c89cb032db66`;
//  return fetch(url)
//      .then(response => response.json())
//      .then(data => ({
//       ...data,
//       popularity: data.popularity.toFixed(1),
//      }));
//  }


// это вариант сделать все вместе. в одном файле


// const filmCard = document.querySelector('.film_list');
//const modalWindow =document.querySelectror('.modal);
// const api = '39e7639bbdd6f3ff4985c89cb032db66';

// filmCard.addEventListener('click', openModal);

// function fetchFilmId(id) {
//   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api}`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => ({
//       ...data
//     }));
// }

// function openModal(e) {
//   e.preventDefault();

//   fetchFilmId(e.target.dataset.id)
//     .then(data => {
//       if (e.target.nodeName !== 'IMG') return;

//       const markup = modalCard(data); ---------------------а вот здесь я б подключила бы лайтбокс. И просто открыла бы модалку без всяких приколов)
//modalWindow.inserAdjacementHTML('beforeend', markup);

//     });
// }
