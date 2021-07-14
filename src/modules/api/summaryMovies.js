import humanizeDuration from "humanize-duration";
// import { API } from "./index.js";
import { log, chalk } from "../../log";

const summaryMovie = (movie) => {
  console.clear();
  log(chalk.bold.italic("Tudo Sobre o Filme: \n"));
  log(`Título: ${chalk.bold(movie.title)}`);
  log(
    `Data de Lançamento: ${chalk.bold(
      new Date(movie.released).toLocaleDateString()
    )}`
  );
  log(
    `Classificação Indicativa: ${chalk.bold(
      humanizeDuration(movie.certification)
    )}`
  );
  log(
    `Duração do Filme: ${chalk.bold(
      humanizeDuration(movie.runtime * 60000, { language: "pt" })
    )}`
  );
  log(`Nota do Filme: ${chalk.bold(movie.rating)}`);
  log(`Gêneros: ${chalk.bold(movie.genres.join(", "))}`);
};

const summaryByListPosition = (list, origin, position) => {
  const movie =
    origin == "popularMovies" ? list[position - 1] : list[position - 1].movie;
  summaryMovie(movie);
};

export { summaryByListPosition };
