// src/App.js

import React, { useState, useEffect } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";

const App = () => {
  const [authUrl, setAuthUrl] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [events, setEvents] = useState([]);

  const handleGetAuthUrl = async () => {
    try {
      const response = await fetch(
        "https://v5n9r94bfh.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const json = await response.json();
      setAuthUrl(json.authUrl);
    } catch (error) {
      console.error("Error fetching auth URL:", error);
    }
  };

  const handleGetAccessToken = async () => {
    try {
      const codeValue = encodeURIComponent(authCode);
      const response = await fetch(
        `https://v5n9r94bfh.execute-api.eu-central-1.amazonaws.com/dev/api/token/${codeValue}`
      );
      const json = await response.json();
      setAccessToken(JSON.stringify(json));
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  const handleGetEvents = async () => {
    try {
      const response = await fetch(
        `https://v5n9r94bfh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${JSON.parse(
          accessToken
        )}`
      );
      const json = await response.json();
      setEvents(json);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    handleGetEvents();
  }, [accessToken]);

  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumberOfEvents />
      <button id="getEvents" onClick={handleGetEvents}>
        Get Events
      </button>
      <pre id="events">{JSON.stringify(events, null, 2)}</pre>
    </div>
  );
};

export default App;
