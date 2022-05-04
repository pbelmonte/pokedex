import React from "react";
import "./src/styles/global.css";
import { PokemonProvider } from "./src/context/pokemonContext/pokemonContext";

export const wrapRootElement = ({ element }) => (
  <PokemonProvider>{element}</PokemonProvider>
)
