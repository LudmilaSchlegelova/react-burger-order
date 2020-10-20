import React, { Component } from 'react'
import Auth from '../../hoc/Auth'
import Burger from '../../components/Burger'
import BuildControls from '../../components/Burger/BuildControls'

class BurgerBuilder extends Component {
	//stary zapis
	// constructor(props) {
	// 	super(props)
	// 	this.state = {}
	// }

	state = { ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 } }

	render() {
		return (
			<Auth>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls />
			</Auth>
		)
	}
}

export default BurgerBuilder
