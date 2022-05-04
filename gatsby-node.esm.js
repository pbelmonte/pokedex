import path from "path";

export const createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve("src/pages/pokemon.tsx");

  const pages = [...Array(898).keys()];

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
