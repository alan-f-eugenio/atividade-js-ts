import chalk from "chalk";
import humanizeDuration from "humanize-duration";
import { summaryMovieMenu } from "../menu";
import { log } from "../log";

interface Movie {
  title: string;
  released: string;
  certification: string;
  runtime: number;
  rating: number;
  genres: Array<string>;
}

const summaryMovie = (movie: Movie, list: Array<any>, origin: string) => {
  console.clear();
  log(chalk.bold.italic("Sobre o Filme: \n"));
  log(`Título: ${chalk.bold(movie.title)}`);
  log(
    `Data de Lançamento: ${chalk.bold(
      new Date(movie.released).toLocaleDateString()
    )}`
  );
  log(`Classificação Indicativa: ${chalk.bold(movie.certification)}`);
  log(
    `Duração do Filme: ${chalk.bold(
      humanizeDuration(movie.runtime * 60000, { language: "pt" })
    )}`
  );
  log(`Nota do Filme: ${chalk.bold(movie.rating)}`);
  log(`Gêneros: ${chalk.bold(movie.genres.join(", "))}`);

  summaryMovieMenu(list, origin);
};

const summaryByListPosition = (
  list: Array<any>,
  origin: string,
  position: number
) => {
  const movie =
    origin == "popularMovies" ? list[position - 1] : list[position - 1].movie;
  summaryMovie(movie, list, origin);
};

export { summaryByListPosition };
