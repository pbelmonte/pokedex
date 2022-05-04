import React from "react";

import SinglePokemon from "../components/SinglePokemon";
import { PokemonProvider } from "../context/pokemonContext/pokemonContext";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageContext: any;
}

function PokemonPage({ pageContext }: Props) {
  return (
    <PokemonProvider>
      <SinglePokemon pokemonId={pageContext.id} />
    </PokemonProvider>
  );
}

export default PokemonPage;
