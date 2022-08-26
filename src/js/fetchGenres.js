export default function fetchGenres(array) {
    let genre = []
    if (array.length <= 2) { genre = [...array] }
    else {
        genre = [...array].slice(0, 2);
    }
    newGenre = []
    for (item of arrayGanre) {
        genre.map((genr) => {
            if (genr === item.id) { newGenre.push(item.name) }
        });
    }
    newGenre = newGenre.join(', ')
}


