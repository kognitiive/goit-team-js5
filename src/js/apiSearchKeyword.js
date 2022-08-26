const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '28f59146d010acf01a886226973a360d';

export async function searchKeyword(searchText) {
    try {
        const res = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchText}`);
        const card = res.data.results
        console.log(card)
    } catch (error) {
        console.log(error);
    }
}
