import "../styles/card.css";

import { Link } from "gatsby";
import React from "react";

import formatId from "../utils/formatId";
import ReplaceGender from "./ReplaceGender";
import Tag from "./Tag";

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
}

function Card({ id, name, imageUrl, types }: Props) {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="m-auto mb-10 w-52 card">
        <div className="rounded-md bg-light-gray">
          <img src={imageUrl} alt={`${name} sprite`} width="200" height="200" />
        </div>
        <div className="px-2">
          <span className="text-xs font-bold text-gray-500">
            {formatId(id)}
          </span>
          <h2 className="text-2xl">
            <ReplaceGender name={name} />
          </h2>
          <div className="flex">
            {types.map((type: string) => (
              <Tag key={type} type={type} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
