// src/App.js
import React, { useState, useEffect } from "react";
import { getEvents } from "./api";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("See all cities");
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  useEffect(() => {
    async function fetchData() {
      const events = await getEvents();
      setEvents(events);
      const uniqueLocations = [
        ...new Set(events.map((event) => event.location)),
      ];
      setAllLocations(uniqueLocations);
    }
    fetchData();
  }, []);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const handleNumberOfEventsChange = (number) => {
    setNumberOfEvents(number);
  };

  const filteredEvents =
    selectedLocation === "See all cities"
      ? events
      : events.filter((event) => event.location === selectedLocation);

  return (
    <div className="App">
      <CitySearch
        allLocations={allLocations}
        onLocationChange={handleLocationChange}
      />
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        onNumberOfEventsChange={handleNumberOfEventsChange}
      />
      <EventList events={filteredEvents.slice(0, numberOfEvents)} />
    </div>
  );
};

export default App;
