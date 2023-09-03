import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";

import "./App.css";

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [isLoading, setIsLoading] = useState(true);
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const allEvents = await getEvents();
      const filteredEvents =
        currentCity === "See all cities"
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
      setErrorAlert("");
    } catch (error) {
      setErrorAlert("An error occurred while fetching events.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.onLine) {
      setInfoAlert("");
    } else {
      setInfoAlert("You are currently offline.");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <h1 className="app-title">Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {!navigator.onLine && (
          <WarningAlert text="This list has been loaded from the cache. It may not be up to date." />
        )}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        numberOfEvents={currentNOE}
        onNumberOfEventsChange={(value) => {
          setCurrentNOE(value);
          setInfoAlert("");
        }}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container">
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorAlert.length ? null : (
        <EventList events={events} />
      )}
    </div>
  );
};

export default App;
