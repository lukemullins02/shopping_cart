import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Shop from "/src/components/Shop";
import userEvent from "@testing-library/user-event";

const mockItem = [{ image: "N/A", id: "1", title: "Hello", price: 45.4 }];

describe("Shop component", () => {
  it("Increment button Loaded", async () => {
    render(<Shop product={mockItem} />);

    const button = await screen.findByText("+");

    expect(button).toBeInTheDocument();
  });

  it("Decrement button Loaded", async () => {
    render(<Shop product={mockItem} />);

    const button = await screen.findByText("-");

    expect(button).toBeInTheDocument();
  });

  it("Increment button works", async () => {
    const user = userEvent.setup();

    render(<Shop product={mockItem} />);

    const button = await screen.findByText("+");

    await user.click(button);
    await user.click(button);

    const input = screen.getByRole("spinbutton");

    console.log(input);

    expect(input.value).toMatch(2);
  });

  it("Decrement button works", async () => {
    const user = userEvent.setup();

    render(<Shop product={mockItem} />);

    const addButton = await screen.findByText("+");
    const minusButton = await screen.findByText("-");

    await user.click(addButton);
    await user.click(addButton);

    await user.click(minusButton);

    const input = screen.getByRole("spinbutton");

    console.log(input);

    expect(input.value).toMatch(1);
  });

  it("Add to Cart works", async () => {
    const user = userEvent.setup();

    render(<Shop product={mockItem} />);

    const button = await screen.findByText("Add to Cart");

    await user.click(button);
  });
});
