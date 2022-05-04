import React from "react";

import Index from "../components/Index";
import { PokemonProvider } from "../context/pokemonContext/pokemonContext";

function IndexPage() {
  return (
    <PokemonProvider>
      <Index />
    </PokemonProvider>
  );
}

export default IndexPage;
