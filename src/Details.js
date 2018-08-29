import React, {Component} from 'react'


class Details extends Component {
	render() {

	/*let url = '';
	fetch(url, {
		method: 'get',
		headers: new Headers({
			'Authorization': ''
			'Content-Type':
		})
	}).then((response) => response.json())
	.then((responseData) => {
		console.log(responseData)
	});*/
		return (
			<ul>
				{
					this.props.locations.filter(location => this.props.activeItem === location.name)
					.map(loc => (
						<div>
			            <li><h2>{loc.name}</h2></li>
			            <li>{this.props.getData(loc.apiID)}rating</li>
			            <li>{loc.type[0]}</li>
			           	</div>
			        ))
		    	}
	        </ul>	
		)
	}
}

export default Details