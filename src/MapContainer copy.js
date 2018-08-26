import React, { Component } from 'react';

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
				<InitialMap
					containerElement={
						<div style={{ height: "100%"}} />
					}
					mapElement={
						<div style={{ height: "100%" }} />
					}
					markers={this.state.markers}
				/>
			</div>
		);
	}
}

export default MapContainer;