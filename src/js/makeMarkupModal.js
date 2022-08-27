
export default function makeMarkupModal(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=39e7639bbdd6f3ff4985c89cb032db66`)
    .then(response => console.log(response.json()));
}
