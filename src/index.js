import templateFunction from './templates/card.hbs';
const axios = require('axios').default;
console.log(templateFunction({
    people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
    ],
}));
async function getUser() {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=28f59146d010acf01a886226973a360d');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getUser();