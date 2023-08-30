import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("Default Number is 32 When No Number is Specified", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;

    given("the user hasn't specified or filtered the number of events", () => {
      AppComponent = render(<App />);
    });

    when("the user sees the list of events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then(/^the default number of displayed events will be (\d+)$/, () => {
      expect(eventList.length).toEqual(32);
    });
  });

  test("User Can Customize the Number of Displayed Events", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("the user has events displayed", async () => {
      AppComponent = render(<App />);
      console.log("AppComponent:", AppComponent);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when(
      "the user chooses to change the number of events displayed",
      async () => {
        console.log("Before findByTestId");
        const button = await screen.findByTestId("numberOfEventsInput");
        await userEvent.clear(button);
        await userEvent.type(button, "10");
      }
    );

    then(
      "the number of events displayed will update to the number the user selected",
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList.length).toEqual(10);
      }
    );
  });
});
