import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer'
import Filter from './Filter'
import List from './List'
import Details from './Details'

class App extends Component {
  state = {
    centerpoint: [
      'lat': 51.629810,
      'lng': 7.858000
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

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCUdugI5eBbuI8oVU4jTQL3hyBa7rtiB0I&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
       let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood Map Project</h1>
        </header>
        <section className="Filter">
          <Filter />
        </section>
        <section className="List">
          <List />
        </section>
        <section className="Details">
          <Details />
        </section>
        <section id="map" className="Map" role="application" tabIndex="-1" style={{width: "100%", height: "400px"}}>
          <MapContainer />
        </section>
      </div>
    );
  }
}

function loadScript(url) {
  let i = window.document.querySelector("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  i.parentNode.insertBefore(script, i) // insert script before firstfound script tag
}

export default App;
