import templateFunction from './templates/card.hbs';
console.log(templateFunction({
    people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
    ],
}));
