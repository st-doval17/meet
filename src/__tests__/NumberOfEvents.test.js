// src/__tests__/NumberOfEvents.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("contains an element with role of textbox", () => {
    render(<NumberOfEvents />);
    const textboxElement = screen.getByRole("textbox");
    expect(textboxElement).toBeInTheDocument();
  });

  test("default value of input field is 32", () => {
    render(<NumberOfEvents />);
    const textboxElement = screen.getByRole("textbox");
    expect(textboxElement).toHaveValue("32");
  });

  test("value of input field changes when user types in it", async () => {
    render(<NumberOfEvents />);
    const textboxElement = screen.getByRole("textbox");
    await userEvent.type(textboxElement, "{backspace}{backspace}10");
    expect(textboxElement).toHaveValue("10");
  });
});
