import React from 'react'
import Auth from '../../../hoc/Auth'
import styled from 'styled-components'
import Button from '../../../UI/Button'

const Title = styled.h3``

const Description = styled.p``

const List = styled.ul``

const Li = styled.li`
	text-transform: capitalize;
`

const TotalPrice = styled.p``

const OrderSummary = props => {
	const ingredientsSummary = Object.keys(props.ingredients).map(item => (
		<Li key={item}>
			{item}: {props.ingredients[item]}
		</Li>
	))
	return (
		<Auth>
			<Title>Your order</Title>
			<Description>
				A delicious burger with the following ingredients:
			</Description>
			<List>{ingredientsSummary}</List>
			<TotalPrice>Total price:</TotalPrice>
			<Description>Continue to checkout?</Description>
			<Button btnType="error">Cancle</Button>
			<Button btnType="success">Continue</Button>
		</Auth>
	)
}

export default OrderSummary

//D.U. na 31 riadok dostat price, fuxnut na 2 des.cisla, strong a nastylovat podla dizajnu.
