import React from "react";

import { Stat } from "../context/pokemonContext/pokemonTypes";
import fromSnakeToText from "../utils/fromSnakeToText";
import Gauge from "./Gauge";

interface Props {
  stats: Stat[];
}

function Stats({ stats }: Props) {
  return (
    <div className="p-6 mt-4 rounded-md bg-medium-gray">
      Stats
      <div className="flex justify-center">
        {stats.map((item: Stat) => (
          <div className="flex flex-col">
            <Gauge value={item.value / 17 + 1} />
            <span className="text-xs text-center font-bold w-11 md:w-14">
              {fromSnakeToText(item.name)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
