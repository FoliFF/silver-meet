import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];

    EventWrapper = shallow(<Event event={event} />);
  });

  test('Render title in event item', () => {
    expect(EventWrapper.find('.event-summary-title')).toHaveLength(1);
  });

  test('Render info in event item', () => {
    expect(EventWrapper.find('.event-info')).toHaveLength(1);
  });

  test('Render show details button in event item', () => {
    expect(EventWrapper.find('.event-showDetails-btn')).toHaveLength(1);
  });

  test('Render event title correctly', () => {
    expect(EventWrapper.find('.event-summary-title').text()).toBe(
      event.summary
    );
  });

  test('Render event info correctly', () => {
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.start.dateTime
    );
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.start.timeZone
    );
    expect(EventWrapper.find('.event-info').text()).toContain(event.location);
  });

  test('Render event collapsed by default', () => {
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('Render click to expand event details', () => {
    EventWrapper.setState({
      show: false
    });
    EventWrapper.find('.event-showDetails-btn').simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
  });

  test('Render when event is collapsed after click expand event details', () => {
    EventWrapper.setState({
      show: true
    });
    expect(EventWrapper.find('.event-description').text()).toContain(
      event.description
    );
    expect(EventWrapper.find('.event-hideDetails-btn')).toHaveLength(1);
  });

  test('Render click to collapse event details', () => {
    EventWrapper.setState({
      show: true
    });
    EventWrapper.find('.event-hideDetails-btn').simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('Render when event is expanded after click collapse event details', () => {
    EventWrapper.setState({
      show: false
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(0);
  });
});