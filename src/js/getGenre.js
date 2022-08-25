
const axios = require('axios').default;
const arrayGanre = [];

async function getGenre (){
    const responseGenre = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=28f59146d010acf01a886226973a360d');
    const ganreArray = await responseGenre.data.genres
    return ganreArray.map(arr => {
        arrayGanre.push({id: arr.id, name: arr.name})
    })
  }
  getGenre ()

  export default arrayGanre;
