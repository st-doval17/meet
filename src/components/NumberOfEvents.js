// src/components/NumberOfEvents.js

import React, { useState } from "react"; // Import useState

const NumberOfEvents = ({
  numberOfEvents,
  onNumberOfEventsChange,
  setErrorAlert,
}) => {
  const [inputValue, setInputValue] = useState(numberOfEvents); // State to manage input value

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setInputValue(value); // Update input value

    if (isNaN(value) || value <= 0) {
      setErrorAlert("Please enter a valid number of events.");
    } else {
      setErrorAlert("");
      onNumberOfEventsChange(value); // Call the parent handler if input is valid
    }
  };

  return (
    <div id="number-of-events">
      <label>Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        placeholder="e.g., 32"
        value={inputValue}
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
