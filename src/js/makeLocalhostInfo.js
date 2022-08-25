//Створюю пусті масиви, для того щоб в них пушити обрані фільми, 
// та відправляти на Localstorage.
const watchedFilmsArray = [];
const queueFilmsArray = [];

function returnChooseFilm () {
//Як буде натиснута кнопка "Додати в переглянуті", має визватись дана функція.
// if(button.texcontent === 'ADD TO WATCHED'){

    //створюю змінну, яка буде дорівнювати об'єкту обраного фільму
    //(або буду створювати новий із значеннями)

// let chooseFilm = modal.array ???

//запушую в масив, який буде відправлено на Localstorage.
// watchedFilmsArray.push(chooseFilm)

// записую в Localstorage.
// localStorage.setItem("watchedFilms", JSON.stringify(watchedFilmsArray))

// Змінюємо текст і стиль кнопки????
//}

// якщо вже був обраний фільм, текст кнопки змінюється і виконується цей код
// else { 
    // Беру масив усих фільмів і перебираю його(або for...), якщо він включає обраний фільм, видаляємо
    //watchedFilmsArray.map((array, index) => { 
        //if (array.includes(modal.array ???)){ 
            //watchedFilmsArray.splice(index, 1)
        //}
        // записуємо вже новий
        //return localStorage.setItem("watchedFilms", JSON.stringify(watchedFilmsArray))
        // Змінюємо текст і стиль кнопки????
    //})
//}
}


//Схожа функція і для іншої кнопки, але масив вже інший
//Зробила 2 різних масива, щоб можна було в бібліотеці обрати обрані по категорії і з Localstorage рендерити???

function returnChooseFilmQueue () {
    //Як буде натиснута кнопка "Додати в переглянуті", має визватись дана функція.
    // if(button.texcontent === 'ADD TO QUEUE'){
    // let chooseFilmQueue = modal.array ???
    // queueFilmsArray.push(chooseFilmQueue)
    // localStorage.setItem("chooseFilmQueue", JSON.stringify(queueFilmsArray))
    // Змінюємо текст і стиль кнопки????
    //}
    // else { 
        //queueFilmsArray.map((array, index) => { 
            //if (array.includes(modal.array ???)){ 
                //queueFilmsArray.splice(index, 1)
            //}
            // записуємо вже новий
            //return localStorage.setItem("chooseFilmQueue", JSON.stringify(queueFilmsArray))
            // Змінюємо текст і стиль кнопки????
        //})
    //}
    }