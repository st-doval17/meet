# Meet App

A “meetup” app of sorts, displaying a list of upcoming events for a city and time of the user’s choosing. It will also be available for users to use while offline

## Description:

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Features and User Stories

Feature 1: Filter Events by City

Scenario: User filters events by city
- Given the user is on the events page
- When the user selects a specific city from the filter
- Then the app should display a list of events for that city

Feature 2: Show/Hide Event Details

Scenario: User expands/collapses event details
- Given the user is on the events page and there is an event with details
- When the user clicks to expand/collapse event details
- Then the app should display or hide the event's additional information

Feature 3: Specify Number of Events to View

Scenario: User specifies the number of events to view
- Given the user is on the events page
- When the user selects a desired number of events from the options
- Then the app should display the specified number of events in the list

Feature 4: Offline Access to Viewed Events

Scenario: User views previously viewed events offline
- Given the user has previously viewed events online
- When the user tries to access the events page while offline
- Then the app should display a cached version of the viewed events

Feature 5: Add App Shortcut to Home Screen

Scenario: User adds app shortcut to home screen
- Given the user is using a mobile device
- When the user opens the app and navigates to the home screen
- Then the app's shortcut icon should be visible on the home screen

Feature 6: View Chart of Upcoming Events by City

Scenario: User views chart of upcoming events by city
- Given the user is on the events page
- When the user clicks on the "View Events Chart" button
- Then the app should display a chart showing upcoming events organized by city
