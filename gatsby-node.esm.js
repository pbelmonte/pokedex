import path from "path";
import { maxPokemonNumber } from "./src/utils/constants";

export const createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve("src/pages/pokemon.tsx");

  const pages = [...Array(maxPokemonNumber).keys()];

  pages.forEach((element) => {
    createPage({
      path: `/pokemon/${element + 1}`,
      component: template,
      context: {
        id: element + 1,
      },
    });
  });
};
