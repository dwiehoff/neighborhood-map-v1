import React, { Component } from 'react';
import { GoogleMapReact } from 'google-map-react';
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

	const AnyReactComponent = ({text}) => <div>{text}</div>

	render() {
		// Code reference to setup API: https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
		// documentation: https://tomchentw.github.io/react-google-maps/
		// https://www.npmjs.com/package/react-google-map
		// https://hackernoon.com/implement-google-maps-in-reactjs-5bc218074689
		// http://xuopled.github.io/react-google-map/
		

		return (
			<div style={{height: "400px", width: "100%", backgroundColor: 'blue'}}>
				<GoogleMapReact
					defaultCenter = { lat: 51.629810, lng: 7.858000 }
					defaultZoom = { 13 }
				>
					<AnyReactComponent
						lat={ 40.7473310 }
						lng={ -73.8517440 }
						text={ 'Wheres Waldo?' }
					/>
				</GoogleMapReact>
			</div>
		)
	}
};

export default MapContainer;