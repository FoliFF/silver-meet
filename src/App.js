import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//import EventGenre from './EventGenre';

class App extends Component {
  
  updateEvents = (location, eventCount) => {
    if(location === undefined){
      location = this.state.seletedLocation
    }
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    }

    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
        ? events 
        : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        seletedLocation: location
      });
    });
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    //console.log("accessToken", accessToken);
    const isTokenValid = (await checkToken (accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted){
      getEvents().then((events) => {
        if (this.mounted){
          this.setState({ 
            events: events.slice(0, this.state.numberOfEvents), 
            locations: extractLocations(events) 
          });
        }
      });
    }
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  componentWillUnmount(){
    this.mounted = false;
  }

  constructor(){
    super();
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      seletedLocation: 'all',
      showWelcomeScreen: undefined,
    }
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className='App' />;
    return (
      <div className="App">
        <h1>React Meet App</h1>
        <h4>Choose your nearest city</h4>        
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <h4>Events in each city</h4>
        
        <ResponsiveContainer height={400}>
          <ScatterChart
              margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          > 
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;