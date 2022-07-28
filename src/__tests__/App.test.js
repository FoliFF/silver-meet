import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents'
import mockData from '../mock-data';
import extractLocations from '../api';

//Task 4.3
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('Render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('Render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('Render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

//Task 4.4, integration:
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () =>{
    const AppWrapper = mount(<App/>);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () =>{
    const AppWrapper = mount(<App/>);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('Get list of events matching the city selected by the user', async() => {
    
  });

});