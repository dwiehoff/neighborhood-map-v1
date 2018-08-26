import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
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

	render() {
		// Code reference to setup API: https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
		// documentation: https://tomchentw.github.io/react-google-maps/
		// https://www.npmjs.com/package/react-google-map
		// https://hackernoon.com/implement-google-maps-in-reactjs-5bc218074689
		// http://xuopled.github.io/react-google-map/
		const GoogleMap1 = withGoogleMap(props => (
			<GoogleMap
				//coordinates={[{title:'Toulouse', position: {lat: 43, lng: 1.44,}}]}
				defaultCenter = { { lat: 51.629810, lng: 7.858000 } }
				defaultZoom = { 13 }
			>
			<Marker
				position={{ lat: 51.629570, lng: 7.858296 }}
			>
				<div>Post office</div>
			</Marker>
			<Marker
				position={{ lat: 51.629859, lng: 7.855444 }}
			>
				<div>Post office</div>
			</Marker>
			</GoogleMap>
		));

		return (
			<div style={{height: "400px", width: "100%", backgroundColor: 'blue'}}>
				<GoogleMap1
					containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
					mapElement={ <div style={{ height: `100%` }} /> }
				/>
			</div>
		);
	}
};

export default MapContainer;