import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import React from "react";

import Gauge from "./Gauge";

describe("Gauge", () => {
  it("renders a gauge with corresponding data", () => {
    const { container } = render(<Gauge value={5} />);
    const empty = container.querySelectorAll(".bg-white");
    expect(empty).toHaveLength(10);
    const full = container.querySelectorAll(".bg-light-blue");
    expect(full).toHaveLength(5);
  });
});
