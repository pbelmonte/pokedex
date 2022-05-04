import { IoMdFemale } from "@react-icons/all-files/io/IoMdFemale";
import { IoMdMale } from "@react-icons/all-files/io/IoMdMale";
import React from "react";

import { Gender } from "../context/pokemonContext/pokemonTypes";
import fromSnakeToText from "../utils/fromSnakeToText";

interface Props {
  height: number;
  weight: number;
  gender: Gender;
  category: string;
  abilities: string[];
}

function PokemonInfo({ height, weight, gender, category, abilities }: Props) {
  return (
    <div className="grid grid-cols-2 p-6 rounded-lg bg-light-blue">
      <div className="flex flex-col">
        <div className="flex flex-col mb-6">
          <p className="text-white">Height</p>
          <p className="text-xl">{`${height / 10} m`}</p>
        </div>
        <div className="flex flex-col mb-6">
          <p className="text-white">Weight</p>
          <p className="text-xl">{`${weight / 10} kg`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-white">Gender</p>
          <div className="flex">
            {(gender === "both" || gender === "male") && (
              <p className="text-xl mr-4">
                <IoMdMale />
              </p>
            )}
            {(gender === "both" || gender === "female") && (
              <p className="text-xl">
                <IoMdFemale />
              </p>
            )}
            {gender === "genderless" && <p className="text-xl">Unknown</p>}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mb-6">
          <p className="text-white">Category</p>
          <p className="text-xl">{category}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-white">Abilities</p>
          {abilities.map(item => (
            <p className="text-xl">{fromSnakeToText(item)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;
