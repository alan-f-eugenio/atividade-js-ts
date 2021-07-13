import prompts from "prompts";
import { log, chalk } from "../../log";
import { searchMovies } from "../api/searchMovies";
import { listPopularMovies, listAnticipatedMovies } from "../api/listMovies";

const mainMenu = async () => {
  try {
    console.clear();
    log(chalk.bold.underline("Bem vindo(a) ao menu principal da aplicação!"));
    log(chalk.italic.yellow("Opções: "));
    log(chalk.cyan("1 - Listar Top 10 Filmes mais Populares"));
    log(chalk.cyan("2 - Listar Top 10 Filmes mais Aguardados"));
    log(chalk.cyan("3 - Pesquisar Filmes"));

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
        log(chalk.bold("Top 10 Filmes mais Populares: \n"));
        listPopularMovies();
        break;
      case 2:
        log(chalk.bold("Top 10 Filmes mais Aguardados: \n"));
        listAnticipatedMovies();
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
