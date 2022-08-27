import axios from 'axios';
export default async  function makeMarkupModal(id) {
   const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=39e7639bbdd6f3ff4985c89cb032db66`)
  return {} = data.data;
}
