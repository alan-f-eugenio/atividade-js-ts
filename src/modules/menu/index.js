import prompts from "prompts";
import { log, chalk } from "../../log";
import { summaryByListPosition } from "../api/summaryMovies";
import {
  listMovies,
  listPopularMovies,
  listAnticipatedMovies,
  listRecommendedMovies,
} from "../api/listMovies";

const mainMenu = async (firstTime = true) => {
  try {
    console.clear();
    log(
      chalk.bold.italic.underline(
        `Seja muito bem vindo(a) ${
          !firstTime ? "novamente " : ""
        }ao Menu Principal!`
      )
    );
    log(chalk.italic.yellow("Opções: "));
    log(chalk.cyan("1 - Listar Top 10 Filmes mais Populares"));
    log(chalk.cyan("2 - Listar Top 10 Filmes mais Aguardados"));
    log(chalk.cyan("3 - Listar Top 10 Recomendações da Semana"));

    const askMenuOption = await prompts({
      type: "number",
      name: "option",
      message: "Qual das opções deseja?",
      validate: (option) =>
        option > 0 && option < 4
          ? true
          : "Opção inválida, digite uma das opções acima.",
    });
    switch (askMenuOption.option) {
      case 1:
        listPopularMovies();
        break;
      case 2:
        listAnticipatedMovies();
        break;
      case 3:
        listRecommendedMovies();
        break;
    }
  } catch (err) {
    console.error(err);
  }
};

const chooseMovieMenu = async (list, origin) => {
  try {
    const askMenuOption = await prompts({
      type: "number",
      name: "position",
      message: "Digite o número do filme da lista:",
      validate: (option) =>
        option > 0 && option < 11
          ? true
          : "Opção inválida, digite uma das opções da lista acima.",
    });

    summaryByListPosition(list, origin, askMenuOption.position);
  } catch (err) {
    console.error(err);
  }
};

const listMoviesMenu = async (list, origin) => {
  try {
    log(
      chalk.bold.italic.underline(
        "\nDeseja pesquisar a respeito de um dos Filmes acima ou retornar ao Menu Principal?"
      )
    );
    log(chalk.italic.yellow("Opções: "));
    log(chalk.cyan("1 - Pequisar a respeito de um dos Filmes"));
    log(chalk.cyan("2 - Retornar ao Menu Princial"));

    const askMenuOption = await prompts({
      type: "number",
      name: "option",
      message: "Qual das opções deseja?",
      validate: (option) =>
        option > 0 && option < 3
          ? true
          : "Opção inválida, digite uma das opções acima.",
    });

    switch (askMenuOption.option) {
      case 1:
        chooseMovieMenu(list, origin);
        break;
      case 2:
        mainMenu(false);
        break;
    }
  } catch (err) {
    console.error(err);
  }
};

const summaryMovieMenu = async (list, origin) => {
  try {
    log(
      chalk.bold.italic.underline(
        "\nExibir Lista de Filmes novamente ou retornar ao Menu Principal?"
      )
    );
    log(chalk.italic.yellow("Opções: "));
    log(chalk.cyan("1 - Exibir Lista Novamente"));
    log(chalk.cyan("2 - Retornar ao Menu Princial"));

    const askMenuOption = await prompts({
      type: "number",
      name: "option",
      message: "Qual das opções deseja?",
      validate: (option) =>
        option > 0 && option < 3
          ? true
          : "Opção inválida, digite uma das opções acima.",
    });

    switch (askMenuOption.option) {
      case 1:
        listMovies(list, origin);
        break;
      case 2:
        mainMenu(false);
        break;
    }
  } catch (err) {
    console.error(err);
  }
};

export { mainMenu, listMoviesMenu, summaryMovieMenu };
