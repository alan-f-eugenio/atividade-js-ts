import { API } from "./index.js";
import { log, chalk } from "../../log";

const listPopularMovies = async () => {
  try {
    const response = await API.get("movies/popular");
    const { results } = response;

    results.forEach((movie, index) => {
      log(
        `${chalk.yellow(index + 1)} - ${chalk.bold(
          movie.title
        )} - ${chalk.italic(`Ano: ${movie.year}`)}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};

const listAnticipatedMovies = async () => {
  try {
    const response = await API.get("movies/anticipated");
    const { results } = response;

    results.forEach((item, index) => {
      log(
        `${chalk.yellow(index + 1)} - ${chalk.bold(
          item.movie.title
        )} - ${chalk.italic.underline(
          `Nível de Hype: ${item.list_count}`
        )} - ${chalk.italic(`Ano Lançamento: ${item.movie.year}`)}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};

export { listPopularMovies, listAnticipatedMovies };
