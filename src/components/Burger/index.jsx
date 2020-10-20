import React from 'react'
import styled from 'styled-components'
import BurgerIngredient from './BurgerIngredient'

const Wrapper = styled.div`
	width: 100%;
	margin: auto;
	height: 250px;
	overflow-y: auto;
	text-align: center;
	font-weight: bold;
	font-size: 1.2rem;

	@media (min-width: 500px) and (min-height: 400px) {
		width: 350px;
		height: 300px;
	}

	@media (min-width: 500px) and (min-height: 401px) {
		width: 450px;
		height: 400px;
	}

	@media (min-width: 1000px) and (min-height: 700px) {
		width: 700px;
		height: 600px;
	}
`

const Burger = props => {
	let transformedIngredients = []
	Object.keys(props.ingredients).map((typeIngredient, i) => {
		const countIngredient = props.ingredients[typeIngredient]
		for (let i = 0; i < countIngredient; i++) {
			transformedIngredients.push(
				<BurgerIngredient key={typeIngredient + i} type={typeIngredient} />
			)
		}
	})
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>
	}
	return (
		<Wrapper>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</Wrapper>
	)
}

export default Burger
