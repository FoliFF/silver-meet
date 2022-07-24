# silver-meet App
This meet application is built so users can find upcoming events in ant given city, with data provided by Google Calendar. The application will be using React, and be built using TDD (Test-Driven Development). The app will also work offline using cached data from the last time it was used online. 

## Feature 2: Show and Hide Event Details

#### Scenario 1 : Collapsed by Default
Given User is on the main page of the app when nothing is selected, then the even details will be 'collapsed'.
 
#### Scenario 2: Expanding the details
Given User wants to see more about a specific event. When the user clicks on that event, then the details for that event will expanded.

#### Scenario 3: Collapse the details
Given User has seen the details and wants to collapse the details. When the user clicks on the expanded details, then the details will collapse again
 
### User Story
As a user should be able to see events occurring in the city of their choosing. The user should be able to to display and collapse event details if they want to see more or less information depending on thier preference.

## Feature 3: Specify number of Events

#### Scenario 1: No Number is specified
When the given user has not specified a preference during their visits on the page then a default of 32 events is displayed.

#### Scenario 2: User has specified event count preference
When the given user has chosen an event count when the user visits the page, then the specified count of events will display
    
### User Story
A user should be able to choose how many events are listed. So that they know how many events are taking place.

## Feature 4 : Use App even when offline

#### Scenario 1: Show cached data when offline
When the given user has no internet connection and when they access the site, then the data is still accessible and viewable for the user.

#### Scenario 2: Show error if user tried to change location
When a given user has no internet and when they want to change location or information, then an error is diplayed. 

### User Story
The user should be able to access events even when they are offline.

## Feature 5: Data Visualization

#### Scenario 1: Show chart with number of events
When a given user is on the main page, they should be able to see upcoming events. Then the user will see a chart with the upcoming events

### User Story 
The User should be able to see charts with the number of upcoming events in their chosen city.

# Dependencies
- React
