import templateFunction from './templates/card.hbs';
const axios = require('axios').default;
const wraper = document.querySelector('.div');
import arrayGanre from './js/getGenre';
console.log(arrayGanre);
// console.log(templateFunction({
//   people: [
//     "Yehuda Katz",
//     "Alan Johnson",
//     "Charles Jolley",
//   ],
// }));
async function getUser() {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=28f59146d010acf01a886226973a360d');
    console.log(response)
    const card = response.data.results[1]
    console.log(card)
    const { poster_path, title, release_date, vote_average, genre_ids } = card;
    let genre = []
    if (genre_ids.length <= 2) { genre = [...genre_ids] }
    else {
      genre = [...genre_ids].slice(0, 2);
    }
    newGenre = []
    for (item of arrayGanre) { 
      genre.map((genr) => {
        if (genr === item.id) { newGenre.push(item.name) }
      });
    }
    newGenre = newGenre.join(', ')
    return { poster_path, title, release_date, vote_average, newGenre }
  } catch (error) {
    console.error(error);
  }
}

async function makeMarkup() { 
  try {
    const data = await getUser();
    wraper.innerHTML = templateFunction(data);

  }
  catch { 
    console.error(error);
  }
}

makeMarkup();
