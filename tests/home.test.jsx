import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "/src/components/Home";

describe("Home component", () => {
  it("Renders correct message", () => {
    render(<Home />);

    expect(screen.getByRole("heading").textContent).toMatch(
      "Welcome to Fake Store!",
    );
  });

  it("Renders paragraph text", () => {
    render(<Home />);
    expect(
      screen.getByText(
        "Browser our store to find a variety of fake items! Navigate by using the links above.",
      ),
    );
  });
});
