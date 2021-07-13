import { API } from "./api/index";

const listPopularMovies = async () => {
  try {
    const response = API.get(`movies/popular`);
    const { data } = response;
  } catch (err) {
    console.error(err);
  }
};

const listTrendingMovies = () => {};

export { listPopularMovies, listTrendingMovies };
