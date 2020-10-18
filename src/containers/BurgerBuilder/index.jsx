import React, { Component } from 'react'
import Auth from '../../hoc/Auth'

class BurgerBuilder extends Component {
	render() {
		return (
			<Auth>
				<div>Burger</div>
				<div>BuildControls</div>
			</Auth>
		)
	}
}

export default BurgerBuilder
