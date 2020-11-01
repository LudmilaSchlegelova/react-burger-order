import React, { Component } from 'react'
import Auth from '../../hoc/Auth'
import Burger from '../../components/Burger'
import BuildControls from '../../components/Burger/BuildControls'
import Modal from '../../UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'

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
		purchasable: false,
		purchasing: false,
	}

	updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(item => ingredients[item])
			.reduce((sum, el) => sum + el, 0)
		this.setState({ purchasable: sum > 0 })
		console.log(sum)
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
		this.updatePurchaseState(updatedIngredients)
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
		this.updatePurchaseState(updatedIngredients)

		// odpocitat z aktualneho stavu 1 polozku.
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true })
	}

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false })
	}

	purchaseContinueHandler = () => {
		alert('You continue!')
	}

	render() {
		console.log(this.state)
		const disabledInfo = { ...this.state.ingredients }
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<Auth>
				<Modal
					modalClosed={this.purchaseCancelHandler}
					show={this.state.purchasing}>
					<OrderSummary
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinue={this.purchaseContinueHandler}
						price={this.state.totalPrice}
						ingredients={this.state.ingredients}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ordered={this.purchaseHandler}
					purchasable={this.state.purchasable}
					price={this.state.totalPrice}
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

//D.U.

//vytvorit novy stav purchasing, defaltne je false.
// pod remove handler vytvorit funkciu purchasehandler(), prepisuje purchasing na true. Tato funkcia sa pouzije ako onClick na tlacitku order now. preposielam cez build controls do komponenty button, atribut bude ordered. Modalu vytvorim atribut show, show: this.state.purchasing. ak je false tak sa robi animacia: transform: translateY(0), ak je false trasnlateY(-100vh), ak je true opacity: 1, ak false opacity:0
