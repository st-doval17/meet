Feature: Specify Number of Events

Scenario: Default Number is 32 When No Number is Specified
    Given the user hasn't specified or filtered the number of events
    When the user sees the list of events
    Then the default number of displayed events will be 32

Scenario: User Can Customize the Number of Displayed Events
    Given the user has events displayed
    When the user chooses to change the number of events displayed
    Then the number of events displayed will update to the number the user selected
