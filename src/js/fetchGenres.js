import {arrayGanre} from './getGenre.js'
export function fetchGenres(array) {
    let genre = []
    let newGenre = []
    let flag = false;
    if (array.length <= 2) {
        genre = [...array];
        flag = true;
    }
    else {
        genre = [...array].slice(0, 2);
    }
    for (let item of arrayGanre) {
        genre.map((genr) => {
            if (genr === item.id) { newGenre.push(item.name) }
        });
    }
    if (!flag){newGenre.push('Other')};
    return newGenre.join(', ');
}


