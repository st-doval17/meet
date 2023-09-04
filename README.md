# Meet App

A “meetup” app of sorts, displaying a list of upcoming events for a city and time of the user’s choosing. It will also be available for users to use while offline

## Description

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Serveless Functions

"Meet" app uses serverless functions like user authentication, event searching and recommendation, and scalability. These functions handle secure logins and registrations while quickly retrieving event details for users. Through serverless technology, the app scales to match user traffic, ensuring strong, optimal performance with cost efficciency.

## Features and User Stories

Feature 1: Filter Events by City

As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

Scenario: User filters events by city

- Given the user is on the events page
- When the user selects a specific city from the filter
- Then the app should display a list of events for that city

Feature 2: Show/Hide Event Details

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

Scenario: User expands/collapses event details

- Given the user is on the events page and there is an event with details
- When the user clicks to expand/collapse event details
- Then the app should display or hide the event's additional information

Feature 3: Specify Number of Events to View

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario: User specifies the number of events to view

- Given the user is on the events page
- When the user selects a desired number of events from the options
- Then the app should display the specified number of events in the list

Feature 4: Offline Access to Viewed Events

As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

Scenario: User views previously viewed events offline

- Given the user has previously viewed events online
- When the user tries to access the events page while offline
- Then the app should display a cached version of the viewed events

Feature 5: Add App Shortcut to Home Screen

As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

Scenario: User adds app shortcut to home screen

- Given the user is using a mobile device
- When the user opens the app and navigates to the home screen
- Then the app's shortcut icon should be visible on the home screen

Feature 6: View of Upcoming Events by City

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario: User views chart of upcoming events by city

- Given the user is on the events page
- When the user clicks on the "View Events Chart" button
- Then the app should display a chart showing upcoming events organized by city

## Graph/Pie Chart
Chart![MeetAppHeader](https://github.com/st-doval17/meet/assets/131451577/b85192ad-63bd-47f9-933b-73b5cbddab07)
![pieChart](https://github.com/st-doval17/meet/assets/131451577/c18ad06e-71ec-4c0a-8a75-e931f1298a75)
![graph](https://github.com/st-doval17/meet/assets/131451577/236b22b1-d194-4a10-ae6b-f7b3552a8e68)
