import React, { Component } from 'react'
import Auth from '../../hoc/Auth'
import Burger from '../../components/Burger'

class BurgerBuilder extends Component {
	render() {
		return (
			<Auth>
				<Burger />
				<div>BuildControls</div>
			</Auth>
		)
	}
}

export default BurgerBuilder
