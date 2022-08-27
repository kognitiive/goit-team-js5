
import axios from 'axios';

 export default async function fetchFilms(page) {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=39e7639bbdd6f3ff4985c89cb032db66&page=${page}`;

   return await axios.get(url).then(response => response.data);
}


