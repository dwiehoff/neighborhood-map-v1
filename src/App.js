import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer'

class App extends Component {
  state = {
    centerpoint: [
      'lat': 51.629810,
      'long': 7.858000
    ],
    locations: [
    {
      'Deutsche Post': [
        'lat': 51.629570,
        'long': 7.858296,
        'type': 'post office'
      ],
      'Rossmann': [
        'lat': 51.629543,
        'long': 7.859443,
        'type': 'drugstore'
      ],
      'Eisdiele': [
        'lat': 51.629747,
        'long': 7.859672,
        'type': ['icecream', 'snack']
      ],
      'Sparkasse': [
        'lat': 51.629859,
        'long': 7.855444,
        'type': ['bank', 'atm']
      ],
      'Bürgeramt': [
        'lat': 51.629915,
        'long': 7.853268,
        'type': 'cro'
      ]
    }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood Map Project</h1>
        </header>
        <section id="map" className="Map" role="application" tabIndex="-1" style={{width: "100%", height: "50%"}}>
          <MapContainer />
        </section>
        <section className="Filter">
          <select>
            <option disabled>Filter by ...</option>
            <option>Food</option>
            <option>Services</option>
            <option>Stores</option>
          </select>
        </section>
        <section className="List">
          <ul>
            <li>Deutsche Post</li>
            <li>Rossmann</li>
          </ul>
        </section>
        <section className="Details">
          <ul>
            <li><h2>name</h2></li>
            <li>rating</li>
            <li>type</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
