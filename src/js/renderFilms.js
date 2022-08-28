import { getUser } from "./getUser";
import templateFunction from '../templates/card.hbs';
import Notiflix from "notiflix";


export default async function renderFilms(films) {
  try {
    const render = films.results.map(item => {
      return getUser(item);
    });
    // console.log(render)
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