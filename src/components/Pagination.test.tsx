import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import React from "react";

import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders two buttons with corresponding data", () => {
    const prev = {
      id: 1,
      name: "Bulbasaur",
      imageUrl: "",
      types: [],
    };
    const next = {
      id: 3,
      name: "Venusaur",
      imageUrl: "",
      types: [],
    };
    const { container } = render(
      <Pagination prevPokemon={prev} nextPokemon={next} />,
    );
    const links = container.getElementsByTagName("a");
    expect(links[0]).toHaveTextContent("#001Bulbasaur");
    expect(links[1]).toHaveTextContent("Venusaur#003");
  });
});
