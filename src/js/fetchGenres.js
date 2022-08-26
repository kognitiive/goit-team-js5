import {arrayGanre} from './getGenre.js'
export function fetchGenres(array) {
    let genre = []
    if (array.length <= 2) { genre = [...array] }
    else {
        genre = [...array].slice(0, 2);
    }
    const newGenre = []
    for (item of arrayGanre) {
        genre.map((genr) => {
            if (genr === item.id) { newGenre.push(item.name) }
        });
    }
    if (newGenre.length <= 2){newGenre = newGenre.push('Other')};
    newGenre = newGenre.join(', ');
}


