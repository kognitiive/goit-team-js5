import { getUser } from "./getUser";
import Notiflix from "notiflix";
import templateFunction from '../templates/card.hbs';

export async function renderFilmsSearchKeyword(films) {
    try {
      const render = films.map(item => { return getUser(item) });
      const markup = templateFunction({
        cards: [
          ...render
        ]
      })
      return markup
    }
    catch {
      console.error(error);
      Notiflix.Notify.failure('There is something wrong');
    }
  }