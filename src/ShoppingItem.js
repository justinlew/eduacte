import React, { Component } from 'react';

class ShoppingItem extends Component {

	render() {
		return (
			<li className="shopping-item">
				{this.props.item}
			</li>
		);
	}
}


export default ShoppingItem;