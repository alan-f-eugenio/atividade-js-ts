var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import chalk from "chalk";
import { API } from "./index";
import { log } from "../log";
import { listMoviesMenu } from "../menu";
const listMovies = (list, origin) => {
  console.clear();
  switch (origin) {
    case "popularMovies":
      log(chalk.bold.italic("Top 10 Filmes mais Populares: \n"));
      list.forEach((movie, index) => {
        log(
          `${chalk.yellow(index + 1)} - ${chalk.bold(
            movie.title
          )} - ${chalk.italic(`Ano de Lançamento: ${movie.year}`)}`
        );
      });
      break;
    case "anticipatedMovies":
      log(chalk.bold.italic("Top 10 Filmes mais Aguardados: \n"));
      list.forEach((item, index) => {
        log(
          `${chalk.yellow(index + 1)} - ${chalk.bold(
            item.movie.title
          )} - ${chalk.italic.underline(
            `Menções na Internet: ${item.list_count}`
          )} - ${chalk.italic(`Ano de Lançamento: ${item.movie.year}`)}`
        );
      });
      break;
    case "recommendedMovies":
      log(chalk.bold.italic("Top 10 Recomendações da Semana: \n"));
      list.forEach((item, index) => {
        log(
          `${chalk.yellow(index + 1)} - ${chalk.bold(
            item.movie.title
          )} - ${chalk.italic.underline(
            `Número de Recomendações: ${item.user_count}`
          )} - ${chalk.italic(`Ano de Lançamento: ${item.movie.year}`)}`
        );
      });
      break;
  }
  listMoviesMenu(list, origin);
};
const listPopularMovies = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield API.get("movies/popular?extended=full");
      const { data } = response;
      // console.log(data);
      listMovies(data, "popularMovies");
    } catch (err) {
      console.error(err);
    }
  });
const listAnticipatedMovies = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield API.get("movies/anticipated?extended=full");
      const { data } = response;
      listMovies(data, "anticipatedMovies");
    } catch (err) {
      console.error(err);
    }
  });
const listRecommendedMovies = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield API.get("movies/recommended/weekly?extended=full");
      const { data } = response;
      listMovies(data, "recommendedMovies");
    } catch (err) {
      console.error(err);
    }
  });
export {
  listPopularMovies,
  listAnticipatedMovies,
  listRecommendedMovies,
  listMovies,
};
