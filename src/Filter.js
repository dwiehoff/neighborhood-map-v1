import React, { Component } from 'react';

class Filter extends Component {
	render() {
		return (
			<select onChange={(e) => this.props.setFilter(
				e.target.value
		      )}>
	            <option disabled>Filter for ...</option>
	            <option value="all">All</option>
	            <option value="food">Food</option>
	            <option value="services">Services</option>
	            <option value="stores">Stores</option>
	          </select>
		)
	}
}

export default Filter;