import { API } from "./index.js";
import { log, chalk } from "../../log";

const summaryByListPosition = (list, origin, position) => {
  const movie =
    origin != "popularMovies" ? list[position - 1] : list[position - 1].movie;
  log(
    `${chalk.yellow(index + 1)} - ${chalk.bold(
      movie.title
    )} - ${chalk.italic(`Ano Lançamento: ${movie.year}`)}`
  );
};

export { summaryByListPosition };
