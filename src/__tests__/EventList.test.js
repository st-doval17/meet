import { render, within, waitFor } from "@testing-library/react";
import { getEvents } from "../api";
import EventList from "../components/EventList";
import App from "../App";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);

    await waitFor(() => {
      expect(EventListComponent.getAllByRole("listitem")).toHaveLength(
        allEvents.length
      );
    });
  });
});

describe("<EventList /> integration", () => {
  test("renders a list of 32 events when the app is mounted and rendered", async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      const EventListDOM = container.querySelector("#event-list");
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      console.log("Number of items:", EventListItems.length);
      expect(EventListItems.length).toBe(32);
    });
  });
});
