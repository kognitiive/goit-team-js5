import axios from "axios";

export default class FilmAPIService{
  constructor() {
    this.searchQuery= '';
    this.page = 1;
    this.perPage = 40;
  }
    async fetchFilms() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=39e7639bbdd6f3ff4985c89cb032db66&language=en-US&page=${this.page}`;

return await axios.get(url)
  .then(response => console.log(response.data))
  .then(({ page }) => {
    this.page += 1;
     return page;
   });
  }

  resetPage() {
    this.page = 1;
  }

  // get pictureName() {
  //   return this.name;
  // }

  // set pictureName(newName) {
  //   this.name = newName;
  // }
}
// const KEY = `39e7639bbdd6f3ff4985c89cb032db66`;
// https://api.themoviedb.org/3/movie/550?api_key=39e7639bbdd6f3ff4985c89cb032db66