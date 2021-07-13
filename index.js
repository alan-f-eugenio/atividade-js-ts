import { API } from "./src/modules/api";
import { menu } from "./src/modules/menu";
import chalk from "chalk";
import prompts from "prompts";

mainMenu();

// var axios = require("axios").default;

// var options = {
//   method: "GET",
//   url: "https://api.trakt.tv/search/movie?query=tron",
//   headers: {
//     "Content-Type": "application/json",
//     "trakt-api-version": "2",
//     "trakt-api-key":
//       "6849011413a1d64a578f43202d13b2263c98e5b6a6240a46c7b670a070807c52",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
