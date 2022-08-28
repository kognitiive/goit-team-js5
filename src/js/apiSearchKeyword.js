const axios = require('axios').default;

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '28f59146d010acf01a886226973a360d';

export async function searchKeyword(searchText, page) {
    try {
        const res = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchText}&page=${page}`);
        // const card = res.data.results;
        const card = res.data;
        console.log('searchKeyword totR / totP:', card.total_results, '/', card.total_pages)
        return card;
    } catch (error) {
        console.log(error);
    }
}
