import React, { Component } from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

class MapContainer extends Component {
	state = {
		markers: [{
			position: {
				lat: 25.0112183,
				lng: 121.5206757000
			}
		}]
	}

	render() {
		return (
			<div style={{height: "300px", width: "100%", backgroundColor: 'blue'}}>
				<GoogleMap
				    defaultZoom={8}
				    defaultCenter={{ lat: -34.397, lng: 150.644 }}
				  >
				  </GoogleMap>
			</div>
		);
	}
}

export default MapContainer;