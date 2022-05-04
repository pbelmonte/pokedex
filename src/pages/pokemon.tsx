import { Link } from "gatsby";
import React, { useEffect } from "react";

import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import PokemonInfo from "../components/PokemonInfo";
import ReplaceGender from "../components/ReplaceGender";
import Stats from "../components/Stats";
import Tag from "../components/Tag";
import {
  getSinglePokemonData,
  setSinglePokemonData,
} from "../context/pokemonContext/pokemonActions";
import { usePokemon } from "../context/pokemonContext/pokemonContext";
import formatId from "../utils/formatId";

interface Props {
  pageContext: { id: number };
}

export default function PokemonPage({ pageContext: { id } }: Props) {
  const {
    state: { singlePokemonData, loadingData },
    dispatch,
  } = usePokemon();

  useEffect(() => {
    dispatch(setSinglePokemonData(null));
    getSinglePokemonData(id, dispatch);
  }, [dispatch, id]);

  return (
    <div className="mx-auto lg:max-w-7xl my-10 bg-white bg-container-bg flex flex-col">
      <title>{singlePokemonData ? singlePokemonData.name : "Pokémon"}</title>
      <main className="mx-auto max-w-5xl bg-white">
        <Loader loading={loadingData} />
        {singlePokemonData && (
          <>
            <Pagination
              prevPokemon={singlePokemonData.prevPokemon}
              nextPokemon={singlePokemonData.nextPokemon}
            />
            <div className="flex justify-center">
              <h1 className="text-3xl text-center mt-5 mb-16">
                <span className="flex">
                  <ReplaceGender name={singlePokemonData.name} />
                  <span className="ml-4 text-gray-600">
                    {formatId(singlePokemonData.id)}
                  </span>
                </span>
              </h1>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 mb-20">
              <div className="flex flex-col px-2">
                <div className="rounded-md bg-light-gray">
                  <img
                    src={singlePokemonData.imageUrl}
                    alt={`${singlePokemonData.name} sprite`}
                    className="mx-auto w-96 lg:w-[500px]"
                  />
                </div>
                <Stats stats={singlePokemonData.stats} />
              </div>
              <div className="flex flex-col m-2 p-2">
                <p className="text-lg mb-10">{singlePokemonData.flavorText}</p>
                <PokemonInfo
                  height={singlePokemonData.height}
                  weight={singlePokemonData.weight}
                  gender={singlePokemonData.gender}
                  category={singlePokemonData.category}
                  abilities={singlePokemonData.abilities}
                />
                <div className="mt-10">
                  <p>Type</p>
                  <div className="flex">
                    {singlePokemonData.types.map(item => (
                      <Tag key={item} type={item} size="big" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto mb-20 flex justify-end">
              <Link
                className="text-white mr-8 p-3 rounded-md bg-light-orange hover:bg-dark-orange"
                to="/"
              >
                Explore More Pokémon
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
