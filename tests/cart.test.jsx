import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Cart from "/src/components/Cart";

describe("Cart component", () => {
  it("Renders empty cart", () => {
    render(<Cart cart={[]} />);

    expect(screen.getByText("Cart Empty"));
  });
});
