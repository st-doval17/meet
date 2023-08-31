// src/__tests__/NumberOfEvents.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  let mockOnNumberOfEventsChange;
  let mockSetErrorAlert;

  beforeEach(() => {
    mockOnNumberOfEventsChange = jest.fn();
    mockSetErrorAlert = jest.fn();
    NumberOfEventsComponent = render(
      <NumberOfEvents
        numberOfEvents="32"
        onNumberOfEventsChange={mockOnNumberOfEventsChange}
        setErrorAlert={mockSetErrorAlert}
      />
    );
  });

  test("renders number of events text input", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("number-of-events-input");
  });

  test("default number is 32", async () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toHaveValue("32");
  });

  test("number of events text box value changes when the user types in it", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(numberTextBox, "32");
  });
});
