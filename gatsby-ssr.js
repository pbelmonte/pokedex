import React from "react"

import { PokemonProvider } from "./src/context/pokemonContext/pokemonContext";

export const wrapRootElement = ({ element }) => (
  <PokemonProvider>{element}</PokemonProvider>
)
