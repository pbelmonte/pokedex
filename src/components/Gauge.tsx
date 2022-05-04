import React from "react";

interface Props {
  value: number;
}

function Gauge({ value }: Props) {
  return (
    <ul>
      {[...Array(15).keys()].map((item: number) => {
        if (15 - item <= value) {
          return (
            <li className="h-2 w-11 lg:w-14 mx-1 my-1 gauge-val bg-light-blue" />
          );
        }
        return <li className="h-2 w-11 lg:w-14 mx-1 my-1 gauge-val bg-white" />;
      })}
    </ul>
  );
}

export default Gauge;
