import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAndEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  let button;

  beforeEach(() => {
    AppComponent = render(<App />);
  });

  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("the user first opens the app", () => {});

    when(
      "the user recieves the full list of events (specific for the city or all events)",
      () => {}
    );

    then("all events will colapse by default.", () => {
      const eventDetails = screen.queryAllByTestId("event-details");
      expect(eventDetails.length).toBe(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("the user gets a list of events", async () => {
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("a user selects an event's details", async () => {
      const button = screen.getAllByText("show details")[0];
      await userEvent.click(button);
    });

    then("the details will show up for that chosen event", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("the user sees the details of an event", async () => {
      await waitFor(() => {
        const eventList = screen.getAllByRole("listitem");
        expect(eventList.length).toBeGreaterThan(0);
      });

      const showDetailsButtons = screen.queryAllByText("Show Details");
      if (showDetailsButtons.length > 0) {
        button = showDetailsButtons[0];
        await userEvent.click(button);
      }
    });

    when("the user presses a button to hide event's details", async () => {
      if (button) {
        await userEvent.click(button);
      }
    });

    then("the details of that event will be hidden", () => {
      const eventDetails = screen.queryAllByTestId("event-details");
      expect(eventDetails.length).toBe(0);
    });
  });
});
