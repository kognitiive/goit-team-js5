const API = '62f49978977e44c6bb0e3dfa31d10c8e';
async function fetchInfo() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=${API}'
  );
  return response;
}

function createEl(item, data) {
  return `
    <li class="film_item list">
        <a class="film-link link" href="/"><img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}" class="film_image"></a>
        <h1 class="film_title">${item.title}</h1>
        <p class="film_desc">|${data}</p>
        <p class="film_raiting">${item.vote_average}</p>
    </li>`;
}

fetchInfo().then(response => {
  showEl(response.data.results);
});

function showEl(item) {
  film.innerHTML = item.reduce((acc, item) => {
    const year = item.release_date.slice(0, 4);
    return acc + createEl(item, year);
  }, '');
}

// async function fetchGenres() {
//     const response = await axios.get(https://api.themoviedb.org/3/genre/movie/list?api_key=${API});
//     return response;
// }

// fetchGenres().then(response => console.log(response))
