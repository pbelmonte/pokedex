import { AiFillLeftCircle } from "@react-icons/all-files/ai/AiFillLeftCircle";
import { AiFillRightCircle } from "@react-icons/all-files/ai/AiFillRightCircle";
import { Link } from "gatsby";
import React from "react";

import { PokemonData } from "../context/pokemonContext/pokemonTypes";
import formatId from "../utils/formatId";
import ReplaceGender from "./ReplaceGender";

interface Props {
  prevPokemon: PokemonData;
  nextPokemon: PokemonData;
}

function Pagination({ prevPokemon, nextPokemon }: Props) {
  return (
    <div className="flex">
      <Link
        className="text-white w-1/2 h-16 mr-1 pt-4 bg-medium-gray hover:bg-light-blue"
        to={`/pokemon/${prevPokemon.id}`}
      >
        <div className="flex justify-center">
          <AiFillLeftCircle className="my-auto mr-2" />
          <span className="mr-2 font-bold text-lg">
            {formatId(prevPokemon.id)}
          </span>
          <span className="text-dark-gray font-bold text-lg">
            <ReplaceGender name={prevPokemon.name} />
          </span>
        </div>
      </Link>
      <Link
        className="text-white w-1/2 h-16 ml-1 pt-4 bg-medium-gray hover:bg-light-blue"
        to={`/pokemon/${nextPokemon.id}`}
      >
        <div className="flex justify-center">
          <span className="mr-2 text-dark-gray font-bold text-lg">
            <ReplaceGender name={nextPokemon.name} />
          </span>
          <span className="font-bold text-lg">{formatId(nextPokemon.id)}</span>
          <AiFillRightCircle className="my-auto ml-2" />
        </div>
      </Link>
    </div>
  );
}

export default Pagination;
