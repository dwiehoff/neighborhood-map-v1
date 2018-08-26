import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
//import { MarkerWithLabel } from 'react-google-maps';

class MapContainer extends Component {
	state = {
		markers: [{
			position: {
				lat: 25.0112183,
				lng: 121.5206757000
			}
		}]
	}

	onMarkerClick = (props, marker, e) => {
		console.log(marker.name);
	}

	render() {

		const { items, activeItem, google } = this.props; // what does this do?

		return (
			<div className="map-container" style={{height: "400px", width: "100%", overflow: "hidden", backgroundColor: 'blue'}}>
				<div id="map">
				<Map google={window.google}
					zoom={15}
					initialCenter={{lat:51.629810, lng: 7.858000}}
					style={ { width: '100%', height: '400px' } }
				>
					<Marker
						onClick={this.onMarkerClick}
						name={'Post office'}
						position={{ lat: 51.629570, lng: 7.858296 }}
						icon={{
							url: 'https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Mail-512.png',
							anchor: new google.maps.Point(32,32),
							scaledSize: new google.maps.Size(32,32)
						}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Bank'}
						title={'Sparkasse'}
						position={{ lat: 51.629859, lng: 7.855444 }}
						icon={{
							url: 'https://cdn3.iconfinder.com/data/icons/essential-rounded/66/Rounded-26-512.png',
							anchor: new google.maps.Point(32,32),
							scaledSize: new google.maps.Size(32,32)
						}}
					/>
				</Map>
				</div>
			</div>
		);
	}
};

export default GoogleApiWrapper({
	apiKey: ('AIzaSyCUdugI5eBbuI8oVU4jTQL3hyBa7rtiB0I')
})(MapContainer);