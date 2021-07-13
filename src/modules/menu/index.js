import chalk from "chalk";
import prompts from "prompts";
import { log } from "../../constants";
import { searchMovies } from "../api/searchMovies";
import { listPopularMovies, listTrendingMovies } from "../api/listMovies";

const mainMenu = async () => {
  try {
    // console.clear();
    log(
      chalk.bold.italic.underline(
        "Bem vindo(a) ao menu principal da aplicação!"
      )
    );
    log(chalk.italic.yellow("Opções: "));
    log(chalk.cyan("1 - Listar filmes mais populares"));
    log(chalk.cyan("2 - Listar filmes mais aguardados"));
    log(chalk.cyan("3 - Pesquisar filmes"));

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
        listTrendingMovies();
        break;
      case 3:
        searchMovies();
        break;
    }
  } catch (err) {
    console.error(err);
  }
};

export { mainMenu };
