import React, { Component } from 'react'
import Auth from '../../hoc/Auth'
import Burger from '../../components/Burger'
import BuildControls from '../../components/Burger/BuildControls'

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.4, meat: 1.3, bacon: 0.7 }

class BurgerBuilder extends Component {
	//stary zapis
	// constructor(props) {
	// 	super(props)
	// 	this.state = {}
	// }

	state = {
		ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
		totalPrice: 4,
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type]
		const updatedCount = oldCount + 1
		const updatedIngredients = { ...this.state.ingredients }
		updatedIngredients[type] = updatedCount
		const priceAddition = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice + priceAddition
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
		//ak kliknem na tlacitko more tak si vezmem aktualny stav a pripocitam plus 1
	}

	removeIngredienthandler = type => {
		const oldCount = this.state.ingredients[type]
		if (oldCount <= 0) {
			return
		}
		const updatedCount = oldCount - 1
		const updatedIngredients = { ...this.state.ingredients }
		updatedIngredients[type] = updatedCount
		const priceAddition = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice - priceAddition
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
		// odpocitat z aktualneho stavu 1 polozku.
	}

	render() {
		console.log(this.state)
		const disabledInfo = { ...this.state.ingredients }
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<Auth>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					disabled={disabledInfo}
					addedIngredients={this.addIngredientHandler}
					deletedIngredients={this.removeIngredienthandler}
				/>
			</Auth>
		)
	}
}

export default BurgerBuilder

//D.U. vytvor 2 funkcie. prva bude addIngredientHandler = () => {
//ak kliknem na tlacitko more tak si vezmem aktualny stav a pripocitam plus 1
//}

//removeIngredienthandler = () => {
//odpocitat z aktualneho stavu 1 polozku.
//}

//nad return console.log(this.state.ingredients).. urobit pre salat, ak budem vediet tak pre vsetko.

//tieto funkcie preposielam do BuildControl
