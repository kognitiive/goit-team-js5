
import axios from 'axios';

 export default async function fetchFilms() {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=39e7639bbdd6f3ff4985c89cb032db66&page=1&per_page=20';

   return await axios.get(url).then(response => response.data.results);
}

