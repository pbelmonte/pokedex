import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import Tag from "./Tag";

describe("Tag", () => {
  it("renders a tag with Fire type, with correct class", () => {
    const { container } = render(<Tag type="Fire" />);
    expect(screen.getByText("Fire")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-fire-tag");
    expect(container.firstChild).toHaveClass("bg-fire-tag");
  });

  it("renders a tag with Water type, with correct class", () => {
    const { container } = render(<Tag type="Water" />);
    expect(screen.getByText("Water")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-water-tag");
    expect(container.firstChild).toHaveClass("bg-water-tag");
  });
});
