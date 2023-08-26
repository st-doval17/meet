// src/components/NumberOfEvents.js

import React from "react";

const NumberOfEvents = ({ numberOfEvents, onNumberOfEventsChange }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    onNumberOfEventsChange(value);
  };
  return (
    <div id="number-of-events">
      <label>Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        placeholder="e.g., 32"
        value={numberOfEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
