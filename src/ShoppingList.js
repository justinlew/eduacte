import React, { Component } from 'react';

class ShoppingList extends Component {
	render() {
		return (
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Laptop</li>
					<li>Monitor</li>
					<li>Backpack</li>
				</ul>
			</div>
		);
	}
}

export default ShoppingList;