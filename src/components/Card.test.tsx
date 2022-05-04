import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import Card from "./Card";

describe("Card", () => {
  it("renders a card with corresponding data", () => {
    render(
      <Card id={1} name="Bulbasaur" imageUrl="" types={["Grass", "Poison"]} />,
    );
    expect(screen.getByText("#001")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("Grass")).toBeInTheDocument();
    expect(screen.getByText("Poison")).toBeInTheDocument();
  });
});
