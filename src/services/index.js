import axios from 'axios';
import { TOKEN } from 'constants';

const http = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
  headers: { Authorization: `Bearer ${TOKEN}` }
});

const errorMgs = {
  popularMovies: 'Error on request popular movies',
  topRatedMovies: 'Error on request top rated movies'
};

export const getPopularMovies = async ({ page }) => {
  const url = `/popular`;
  const errorMsg = errorMgs.popularMovies;

  try {
    const { data, status } = await http.get(url, { params: { page } });

    if (status !== 200) throw new Error(errorMsg);

    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getTopRatedMovies = async () => {
  const url = `/top_rated`;
  const errorMsg = errorMgs.topRatedMovies;

  try {
    const { data, status } = await http.get(url);

    if (status !== 200) throw new Error(errorMsg);

    console.log('batata');

    return data.results;
  } catch (error) {
    console.error(error);
  }
};
