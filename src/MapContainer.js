import React, { Component } from 'react';
import { InfoWindow, GoogleApiWrapper, Map, Marker } from 'google-maps-react';
//import { MarkerWithLabel } from 'react-google-maps';

class MapContainer extends Component {

	onMarkerClick = (props, marker, e) => {
		console.log(marker.name);
		this.props.setActive(marker.name);
		//e.target = props.name;
	}

	render() {
		let markers = this.props.locations;
		if (this.props.activeFilter === 'food') {
			markers = this.props.locations.filter( location => ['icecream', 'restaurant'].includes(location.type[0]) );
			//console.log(markers)
			//console.log(locationsSorted);
			 //locationsSorted = [{name: 'Eisdiele'}];
			 //locationsSorted = [{name: ['icecreams'].includes(locationsSorted[2].type[0]).toString() }];
		} else if (this.props.activeFilter === 'services') {
			markers = this.props.locations.filter( location => ['cro','bank','post office'].includes(location.type[0]) );
		} else if (this.props.activeFilter === 'stores') {
			markers = this.props.locations.filter( location => ['drugstore', 'grocery'].includes(location.type[0]) );
		}

		const { items, activeItem, google } = this.props; // what does this do?
		let size = 32;
		return (
			<div className="map-container" style={{height: "400px", width: "100%"}}>
				<div id="map">
				<Map google={window.google}
					zoom={15}
					initialCenter={{lat: this.props.lat, lng: this.props.lng}}
					style={ { width: '100%', height: '400px' } }
				>
					{markers.map(marker => (
						<Marker
							key={marker.name}
							onClick={this.onMarkerClick}
							name={marker.name}
							title={marker.name}
							position={{ lat: marker.lat, lng: marker.lng }}
							icon={{
								url: (this.props.activeItem === marker.name) ? 'https://www.shareicon.net/data/512x512/2017/05/22/886131_map_512x512.png' : 'http://icons.iconarchive.com/icons/iconsmind/outline/256/Map-Marker-icon.png',
								anchor: new google.maps.Point(32,32),
								scaledSize: new google.maps.Size((this.props.activeItem === marker.name) ? 50 : 32, (this.props.activeItem === marker.name) ? 50 : 32)
							}}
							animation={(this.props.activeItem === marker.name) ? '1' : '0'}
						/>
					))}
					{/*<InfoWindow>
						marker={}
					</InfoWindow>*/}
					{/*<Marker
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
					<Marker
						onClick={this.onMarkerClick}
						name={'Supermarket'}
						title={'Netto'}
						position={{ lat: 51.629728, lng: 7.849120 }}
						icon={{
							url: 'https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/red_tomato_fruit_vegetable-512.png',
							anchor: new google.maps.Point(32,32),
							scaledSize: new google.maps.Size(42,42)
						}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Drugstore'}
						title={'Rossmann'}
						position={{ lat: 51.629475, lng: 7.859417 }}
						icon={{
							url: 'https://cdn3.iconfinder.com/data/icons/solid-locations-icon-set/64/Doctors_2-512.png',
							anchor: new google.maps.Point(32,32),
							scaledSize: new google.maps.Size(22,22)
						}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'CRO'}
						title={'Bürgeramt'}
						position={{ lat: 51.629915, lng: 7.853268 }}
						icon={{
							url: 'https://cdn3.iconfinder.com/data/icons/finance-152/64/1-512.png',
							anchor: new google.maps.Point(32,32),
							scaledSize: new google.maps.Size(32,32)
						}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Ice cream'}
						title={'Eisdiele'}
						position={{ lat: 51.629747, lng: 7.859672 }}
						icon={{
							url: 'https://cdn1.iconfinder.com/data/icons/super-ice-cream/512/6-512.png',
							anchor: new google.maps.Point(32,32),
							scaledSize: new google.maps.Size(32,32)
						}}
					/>*/}
				</Map>
				</div>
			</div>
		);
	}
};

export default GoogleApiWrapper({
	apiKey: ('AIzaSyCUdugI5eBbuI8oVU4jTQL3hyBa7rtiB0I')
})(MapContainer);