import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem';

class ShoppingList extends Component {
	render() {
		return (
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<ShoppingItem item="Macbook"></ShoppingItem>
					<ShoppingItem item="1440p monitor"></ShoppingItem>
					<ShoppingItem item="Backpack"></ShoppingItem>
				</ul>
			</div>
		);
	}
}

export default ShoppingList;