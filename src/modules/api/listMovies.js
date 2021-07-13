import { API } from "./index.js";

const listPopularMovies = async () => {
  try {
    const response = await API.get("movies/popular");
    const { results } = response;

    console.log(results);
  } catch (err) {
    console.error(err);
  }
};

const listTrendingMovies = () => {};

export { listPopularMovies, listTrendingMovies };
