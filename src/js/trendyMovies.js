
import axios from 'axios';

 export default async function fetchFilms() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=39e7639bbdd6f3ff4985c89cb032db66`;

  return  await axios.get(url).then(response => console.log(response.data));
}
