import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import Layout from "./Layout";

describe("Layout", () => {
  it("renders a layout with corresponding data", () => {
    const { container } = render(
      <Layout pageTitle="Test Layout">
        <div>Test div</div>
      </Layout>,
    );
    const h1 = container.getElementsByTagName("h1")[0];
    expect(h1).toHaveTextContent("Test Layout");
    expect(screen.getByText("Test div")).toBeInTheDocument();
  });
});
