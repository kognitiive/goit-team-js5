import { getUser } from "./getUser";
import templateFunction from '../templates/card.hbs';
import Notiflix from "notiflix";


export async function renderFilms(films) {
  try {
    const render = films.results.map(item => {
      return getUser(item);
    });
    // console.log(render)
    return markup = templateFunction({
      cards: [
        ...render
      ]
    })
  }
  catch {
    console.error(error);
    Notiflix.Notify.failure('There is something wrong');
  }
}