import { searchKeyword } from "./apiSearchKeyword";
import Notiflix from "notiflix";
import templateFunction from '../templates/card.hbs';

export async function renderFilmsSearchKeyword(e) {
    e.preventDefault()
    const searchText = e.value.trim()
    if (!searchText) {
        return
    }
    const films = await searchKeyword(searchText);
    if (films.length === 0) {
     return Notiflix.Notify.info('Oops, there is no film with that name');
      
    }
    if (searchText.length < 3) {
      return Notiflix.Notify.info('Please enter at least 3 letters');
    }
    try {
      const render = films.map(item => { return getUser(item) });
      const markup = templateFunction({
        cards: [
          ...render
        ]
      })
      wraper.innerHTML = '';
      wraper.insertAdjacentHTML('beforeend', markup);
    }
    catch {
      console.error(error);
      Notiflix.Notify.failure('There is something wrong');
    }
  }