import { API } from "./index.js";
import { log, chalk } from "../../log";

const listMovies = (movieList) => {
  movieList.forEach((movie, index) => {
    log(
      `${chalk.yellow(index + 1)} - ${chalk.bold(movie.title)} - ${chalk.italic(
        `Ano: ${movie.year}`
      )}`
    );
  });

};

const listPopularMovies = async () => {
  try {
    const response = await API.get("movies/popular");
    const { results } = response;

    listMovies(results);
  } catch (err) {
    console.error(err);
  }
};

const listTrendingMovies = () => {};

export { listPopularMovies, listTrendingMovies };
