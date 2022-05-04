import React, { useEffect, useRef, useState } from "react";

import Card from "../components/Card";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { getPokemonData } from "../context/pokemonContext/pokemonActions";
import {
  PokemonProvider,
  usePokemon,
} from "../context/pokemonContext/pokemonContext";

export default function IndexPage() {
  const { state, dispatch } = usePokemon();
  const [shouldLoad, setShouldLoad] = useState<boolean>(true);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      const target = listRef.current ? listRef.current.clientHeight : 9999;
      if (
        window.pageYOffset + window.innerHeight >= target &&
        state.pokemonList.length > 12
      ) {
        setShouldLoad(true);
      }
    };
  });

  useEffect(() => {
    if (shouldLoad && !state.loadingData) {
      setShouldLoad(false);
      getPokemonData(state.pokemonList, dispatch);
    }
  }, [state.pokemonList, state.loadingData, dispatch, shouldLoad]);

  return (
    <PokemonProvider>
      <Layout pageTitle="Pokédex">
        <div className="m-auto mb-40 flex flex-col">
          <div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20"
            ref={listRef}
          >
            {state.pokemonList.map(({ id, name, imageUrl, types }) => (
              <Card
                key={id}
                id={id}
                name={name}
                imageUrl={imageUrl}
                types={types}
              />
            ))}
          </div>
          <Loader loading={state.loadingData} />
          {state.pokemonList.length <= 12 && (
            <div className="m-auto mb-20">
              <button
                type="button"
                className="text-white p-2 px-6 rounded-md bg-light-blue hover:bg-dark-blue"
                onClick={() => getPokemonData(state.pokemonList, dispatch)}
              >
                Load more Pokémon
              </button>
            </div>
          )}
        </div>
      </Layout>
    </PokemonProvider>
  );
}
