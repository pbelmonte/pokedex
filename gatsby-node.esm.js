import path from 'path'

export const createPages = ({ actions }) => {
  const { createPage } = actions

  const template = path.resolve('src/pages/pokemon.tsx')

  const range = (start, stop) => Array.from({ length: (stop - start)}, (_, i) => start + i)

  const pages = range(1, 899)

  pages.forEach(element => {
    createPage({
      path: `/pokemon/${element}`,
      component: template,
      context: {
        id: element,
      },
    })
  })
}
