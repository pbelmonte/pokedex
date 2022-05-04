import classNames from "classnames";
import React from "react";

import { backgroundClassMap, textClassMap } from "../utils/dynamicColorsMaps";

interface Props {
  type: string;
  size?: "small" | "big";
}

function Tag({ type, size = "small" }: Props) {
  return (
    <div
      key={type}
      className={classNames(
        `px-4 py-0.5 mx-1 my-2 text-xs rounded-sm ${
          backgroundClassMap[type.toLowerCase()]
        } ${textClassMap[type.toLowerCase()]}`,
        { "text-xl": size === "big" },
      )}
    >
      {type}
    </div>
  );
}

export default Tag;
