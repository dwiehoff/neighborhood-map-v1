import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer'
import Filter from './Filter'
import Results from './Results'
import Details from './Details'
import axios from 'axios'


class App extends Component {
  state = {
    centerpoint: {
      'lat': 51.629810,
      'lng': 7.858000
    },
    locations: [
      { 
        'name': 'Deutsche Post',
        'lat': 51.629570,
        'lng': 7.858296,
        'type': ['post office'],
        'apiID': 'ChIJjXqC26BxuUcR34WH6HhTPWo'
      },
      {
        'name': 'Rossmann',
        'lat': 51.629543,
        'lng': 7.859443,
        'type': ['drugstore'],
        'apiID': 'ChIJhXQgHKdxuUcRUHrfk8rVPM8'
      },
      {
        'name': 'Eisdiele',
        'lat': 51.629747,
        'lng': 7.859672,
        'type': ['icecream', 'snack'],
        'apiID': 'ChIJ_7u3MqdxuUcRLegNSgC0ijY'
      },
      {
        'name': 'Sparkasse',
        'lat': 51.629859,
        'lng': 7.855444,
        'type': ['bank', 'atm'],
        'apiID': 'ChIJK-gYUKBxuUcRKdeuR5auCdk'
      },
      {
        'name': 'Bürgeramt',
        'lat': 51.629915,
        'lng': 7.853268,
        'type': ['cro'],
        'apiID': 'ChIJrxbRKKBxuUcRJL661ThwgJ8'
      },
      {
        'name': 'Netto',
        'lat': 51.629728,
        'lng': 7.849120,
        'type': ['grocery'],
        'apiID': 'ChIJPY9jXaVxuUcR6BzdcUtzlDo'
      },
      {
        'name': 'Pizzeria Piccola Italia',
        'lat': 51.6297557,
        'lng': 7.855991,
        'type': ['restaurant'],
        'apiID': 'ChIJe5LJ3KBxuUcRaI6JHzPcvZs'
      },
      {
        'name': 'Dinner & Lounge by Andrea',
        'lat': 51.6301826,
        'lng': 7.8544188,
        'type': ['restaurant'],
        'apiID': 'ChIJF5UF9qBxuUcROh5gfb_OpVY'
      },
      {
        'name': 'Lindenhof',
        'lat': 51.6332052,
        'lng': 7.856491,
        'type': ['restaurant'],
        'apiID': 'ChIJ55HcXKBxuUcRJNqwkaYMU1s'
      }

    ],
    'activeFilter': 'all',
    'activeItem': 'Bürgeramt',
    'apidata': []
  }

  setFilter = (filter) => {
    this.setState({activeFilter: filter})
  }

  setActive = (k) => {
    this.setState({activeItem: k})
  }

  componentDidMount() {
    this.getData()
  }

  getData(placeID) {
    /*let setDataState = this.setState.bind(this);
    let dataMan = [];

    let VENUE_ID = '';
    const CLIENT_ID = 'HBCG32G5UOUIRWCXFVY5GVBORXLKLYEDHW0O5XPWKEYWXJ1Q',
          CLIENT_SECRET = 'ZWCLWELNQFRKEBTT45XB54PEZ54FIBJP3FICYWLOR5O45INH';

    const dataEndpoint = 'https://api.foursquare.com/v2/venues/{VENUE_ID}?';

    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    };

    fetch(dataEndpoint + new URLSearchParams(params), {
      method: 'GET'
    }).then(response => response.json()).then(response => {
      console.log(response);
      dataMan.push('');
      setDataState({apidata: response.response.groups[0].items});
    });*/
    let url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&fields=name,rating,formatted_phone_number,price_level,rating,type&origin=*&key=AIzaSyBtHmEoKEaDQ2QD_qLQQVtM4Wkqw-Dieew#"
    console.log(url);
    fetch(url, {method: 'GET', dataType: 'json', headers: {}, credentials: 'include'})
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('parsing failed', error))
    /*var restRequest = gapi.client.request({
      'path': 'https://maps.googleapis.com/maps/api/place/details/json',
      'params': {'placeID': placeID, 'fields': 'name,rating,formatted_phone_number,price_level,rating,type', 'key': 'AIzaSyBtHmEoKEaDQ2QD_qLQQVtM4Wkqw-Dieew#', 'origin': '*'}
    });*/ 
    /*
    var request = {
      placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
      fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
    };

    service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callback);

    function callback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
      }
    }*/
    /*axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&fields=name,rating,formatted_phone_number,price_level,rating,type&origin=*&key=AIzaSyBtHmEoKEaDQ2QD_qLQQVtM4Wkqw-Dieew#')
    .then(res => { console.log(res)})
    .catch((e) => {console.log('error', e)}) */

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood Map Project</h1>
        </header>
        <section className="Filter">
          <Filter
            locations={this.state.locations}
            setFilter={this.setFilter} />
        </section>
        <section className="Results">
          <Results
            locations={this.state.locations}
            activeFilter={this.state.activeFilter}
            activeItem={this.state.activeItem}
            setActive={this.setActive} />
        </section>
        <section className="Details">
          <Details
            locations={this.state.locations}
            activeItem={this.state.activeItem}
              getData={this.getData} />
        </section>
        <section id="map" className="Map" role="application" tabIndex="-1" style={{width: "100%", height: "400px"}}>
          <MapContainer
            lat={this.state.centerpoint.lat}
            lng={this.state.centerpoint.lng}
            locations={this.state.locations}
            activeFilter={this.state.activeFilter}
            activeItem={this.state.activeItem}
            setActive={this.setActive} />
        </section>
      </div>
    );
  }
}

export default App;


//fetch('https://api.foursquare.com/v2/venues/4f2af2f37b0c8da979cd4670/likes?client_id=&client_secret=&v=20180323    &limit=1&ll=40.7243,-74.0018&query=coffee')
// https://places.cit.api.here.com/places/v1/discover/here?at=51.629810,7.858000&q=netto&app_id=AUkdC9gCvDQCUjvyfHuR&app_code=6_rQPuzcszIFR-TYU9wC-w&pretty
// https://api.foursquare.com/v2/venues/search?query=dinner-lounge-andrea&intent=global?client_id=HBCG32G5UOUIRWCXFVY5GVBORXLKLYEDHW0O5XPWKEYWXJ1Q&client_secret=ZWCLWELNQFRKEBTT45XB54PEZ54FIBJP3FICYWLOR5O45INH&v=20180323
// https://api.foursquare.com/v2/venues/search?query=dinner-lounge-andrea&intent=global&client_id=HBCG32G5UOUIRWCXFVY5GVBORXLKLYEDHW0O5XPWKEYWXJ1Q&client_secret=ZWCLWELNQFRKEBTT45XB54PEZ54FIBJP3FICYWLOR5O45INH&v=20180323
// >>axios; near=Chicago,IL
// const endpoint = "url"
// const paramters = { client_id:, client_secret:'', query:'', near:'Hamm,Germany', v: '20182507'}
// axios.get(endpoint + new URLSearchParams(parameters)).then(response => {}).catch(error => {})
// https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJPY9jXaVxuUcR6BzdcUtzlDo&fields=name,rating,formatted_phone_number,price_level,rating,type&key=AIzaSyBtHmEoKEaDQ2QD_qLQQVtM4Wkqw-Dieew#
// https://api.foursquare.com/v2/venues/VENUE_ID/hours => response.hours.timesframes.open.start / .end
// morgen abend
// tab index => http://www.simple10.com/code/2013/10/25/disable-google-maps-tab-index/
// place id google => https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
// readme that the service worker is available only in build mode and not in developer mode.
