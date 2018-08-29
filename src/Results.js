import React, {Component} from 'react';

class Results extends Component {

	

	/*
	displayResults = () => {
		if (this.props.activeFilter === 'all') {
			this.props.locations.map(location => (

			))
		}
				case 'all':

				; break;
				case 'food':
				case 'services':
				case 'store': ; break;
			}
	} */


	/*componentWillReceiveProps({activeFilter}) {
	  this.setState({...this.state,activeFilter})
	}*/

	componentDidMount() {
		//this.setState({activeFilter: this.props.activeFilter})
	}

	onItemClick = (e, locationName) => {
		console.log(locationName);
		this.props.setActive(locationName);
	}

	render() {
		let locationsSorted = this.props.locations.sort((a,b) => { // Adapted from https://www.w3schools.com/js/js_array_sort.asp
			let x = a.name.toLowerCase();
			let y = b.name.toLowerCase();
			if (x<y)
				return -1;
			if (x>y)
				return 1;
			return 0;
		});
		if (this.props.activeFilter === 'food') {
			locationsSorted = locationsSorted.filter( location => ['icecream', 'restaurant'].includes(location.type[0]) );
			//console.log(locationsSorted);
			 //locationsSorted = [{name: 'Eisdiele'}];
			 //locationsSorted = [{name: ['icecreams'].includes(locationsSorted[2].type[0]).toString() }];
		} else if (this.props.activeFilter === 'services') {
			locationsSorted = locationsSorted.filter( location => ['cro','bank','post office'].includes(location.type[0]) );
		} else if (this.props.activeFilter === 'stores') {
			locationsSorted = locationsSorted.filter( location => ['drugstore', 'grocery'].includes(location.type[0]) );
		}


		return (
				<div>
				<i style={{visibility: 'hidden'}}>{this.props.activeFilter}</i>
				<ul>
					{
						/* if (this.props.activeFilter === 'all') { */
							locationsSorted.map(location => (
								<li key={location.name} className={(this.props.activeItem === location.name) ? "active" : "" } onClick={(e) => this.onItemClick(e, location.name)}>
									{location.name}
								</li>			
							))
						/* } */
					}
		        </ul>
		        </div>
		)
	}
}

export default Results