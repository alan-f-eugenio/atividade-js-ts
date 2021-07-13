import { API } from "./index.js";
import { log, chalk } from "../../log";
import { listMoviesMenu } from "../menu";

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

    listMoviesMenu(results, "popularMovies");
  } catch (err) {
    console.error(err);
  }
};

const listAnticipatedMovies = async () => {
  try {
    const response = await API.get("movies/anticipated?extended=full");
    const { results } = response;

    results.forEach((item, index) => {
      log(
        `${chalk.yellow(index + 1)} - ${chalk.bold(
          item.movie.title
        )} - ${chalk.italic.underline(
          `Menções na Internet: ${item.list_count}`
        )} - ${chalk.italic(`Ano Lançamento: ${item.movie.year}`)}`
      );
    });

    listMoviesMenu(results, "popularMovies?extended=full");
  } catch (err) {
    console.error(err);
  }
};

export { listPopularMovies, listAnticipatedMovies };
