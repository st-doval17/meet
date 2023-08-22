//  src/__tests__/Event.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  test("details section is hidden by default", () => {
    render(<Event event={allEvents[0]} />);
    const eventDetails = screen.queryByText(allEvents[0].description);
    expect(eventDetails).not.toBeInTheDocument();
  });

  test("clicking 'show details' button reveals details section", async () => {
    render(<Event event={allEvents[0]} />);
    const showDetailsButton = screen.getByText("show details");
    userEvent.click(showDetailsButton);

    const eventDetails = await screen.findByText(allEvents[0].description);
    expect(eventDetails).toBeInTheDocument();
  });

  test("clicking 'hide details' button hides details section", async () => {
    render(<Event event={allEvents[0]} />);
    const showDetailsButton = screen.getByText("show details");
    userEvent.click(showDetailsButton);

    const hideDetailsButton = screen.getByText("hide details");
    userEvent.click(hideDetailsButton);

    const eventDetails = screen.queryByText(allEvents[0].description);
    expect(eventDetails).not.toBeInTheDocument();
  });

  test("hide details button is hidden when details are hidden", () => {
    render(<Event event={allEvents[0]} />);
    const hideDetailsButton = screen.queryByText("hide details");
    expect(hideDetailsButton).not.toBeInTheDocument();
  });

  test("show details button is hidden when details are shown", async () => {
    render(<Event event={allEvents[0]} />);
    const showDetailsButton = screen.getByText("show details");
    userEvent.click(showDetailsButton);

    const hideDetailsButton = await screen.findByText("hide details");
    expect(hideDetailsButton).toBeInTheDocument();
  });
});
