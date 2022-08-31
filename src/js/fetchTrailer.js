import axios from 'axios';

const API_KEY = 'c01f14dcdb58e9cec669b1017a4d540c';
const BASE_URL = 'https://api.themoviedb.org/3';
export async function fetchTrailers(id) {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const trailer = await axios.get(url);
  return trailer;
}

