import prompts from "prompts";
import { log, chalk } from "../../log";
import { searchMovies } from "../api/searchMovies";
import { listPopularMovies, listAnticipatedMovies } from "../api/listMovies";
import { summaryByListPosition } from "../api/summaryMovies";

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
    console.clear();
    switch (askMenuOption.option) {
      case 1:
        log(chalk.bold.italic("Top 10 Filmes mais Populares: \n"));
        listPopularMovies();
        break;
      case 2:
        log(chalk.bold.italic("Top 10 Filmes mais Aguardados: \n"));
        listAnticipatedMovies();
        break;
      case 3:
        log(chalk.bold.italic("Top 10 Recomendações da Semana: \n"));
        listRecommendedMovies();
        break;
    }
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

    const askMenuOption = await prompts([
      {
        type: "number",
        name: "option",
        message: "Qual das opções deseja?",
        validate: (option) =>
          option > 0 && option < 3
            ? true
            : "Opção inválida, digite uma das opções acima.",
      },
      {
        type: (prev) => (prev == 1 ? "number" : null),
        name: "position",
        message: "Digite o número do filme da lista:",
        validate: (option) =>
          option > 0 && option < 11
            ? true
            : "Opção inválida, digite uma das opções da lista acima.",
      },
    ]);

    if (askMenuOption.position) {
      summaryByListPosition(list, origin, askMenuOption.position);
    } else {
      mainMenu(false);
    }
  } catch (err) {
    console.error(err);
  }
};

export { mainMenu, listMoviesMenu };
