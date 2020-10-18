import React, { Component } from 'react'
import Auth from '../../hoc/Auth'
import Burger from '../../components/Burger'

class BurgerBuilder extends Component {
	//stary zapis
	// constructor(props) {
	// 	super(props)
	// 	this.state = {}
	// }

	state = { ingredients: { salad: 1, bacon: 1, cheese: 2, meat: 2 } }

	render() {
		return (
			<Auth>
				<Burger ingredients={this.state.ingredients} />
				<div>BuildControls</div>
			</Auth>
		)
	}
}

export default BurgerBuilder
