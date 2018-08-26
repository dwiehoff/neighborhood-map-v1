import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

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
			<div style={{height: "100%"}}>
				<GoogleMap
					// apiKey={}
					center={[59.93,30,33]}
					zoom={9}
				>
				</GoogleMap>
			</div>
		);
	}
}

export default MapContainer;