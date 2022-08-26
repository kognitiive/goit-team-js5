import templateFunction from './templates/card.hbs';
import {fetchGenres} from './js/fetchGenres';
const axios = require('axios').default;
const wraper = document.querySelector('.div');
import Notiflix from 'notiflix';
import fetchFilms from './js/fetchFilms';
import {arrayGanre} from './js/getGenre';
console.log(arrayGanre);

// console.log(templateFunction({
//   people: [
//     "Yehuda Katz",
//     "Alan Johnson",
//     "Charles Jolley",
//   ],
// }));

 const films = fetchFilms()
   .then(result => {
     console.log(result);
     const render = result.map(({ poster_path, title, release_date, vote_average, genre_ids } = item) => 
                               {let newGenre = fetchGenres(genre_ids);
                                templateFunction(poster_path, title, release_date, vote_average, newGenre)).join('');}
     wraper.insertAdjacentHTML('beforeend', render);
   });

//async function getUser() {
//try {
//    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=28f59146d010acf01a886226973a360d');
//    // console.log(response)
//     const card = response.data.results[1]
//     // console.log(card)
//    const { poster_path, title, release_date, vote_average, genre_ids } = card;
//
//    let newGenre = fetchGenres(genre_ids);
//    return { poster_path, title, release_date, vote_average, newGenre }
//}
//  catch (error) {
//    console.error(error);
//
//  }


 // async function makeMarkup() {
//   try {
//      const data = await getUser();
//      wraper.innerHTML = templateFunction(data);
//
 //    }
//     catch {
//       console.error(error);
//     }
//   }

//makeMarkup();
