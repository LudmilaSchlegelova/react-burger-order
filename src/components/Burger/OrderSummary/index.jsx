import React from 'react'
import Auth from '../../../hoc/Auth'
import styled from 'styled-components'
import Button from '../../../UI/Button'

const Title = styled.h2`
	font-weight: bold;
	margin-top: 30px;
`

const Description = styled.p`
	margin-top: 20px;
`

const List = styled.ul`
	margin-top: 20px;
`

const Li = styled.li`
	text-transform: capitalize;
	list-style-type: disc;
	margin-left: 35px;
	padding: 5px;
`

const TotalPrice = styled.p`
	margin-top: 20px;
	font-weight: bold;
`

const Strong = styled.strong`
	font-weight: bold;
	margin-left: 5px;
`

const Btn = styled(Button)`
	border-color: transparent;
	padding-left: 0;
	font-weight: bold;
	margin-left: 50px;
`

const ButtonWrapper = styled.div`
	display: flex;
	margin-top: 35px;

	${Btn} {
		&:first-child {
			margin-left: 0;
		}
	}
`

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
			<TotalPrice>
				Total price:
				<Strong>{props.price.toFixed(2)}</Strong>
			</TotalPrice>
			<Description>Continue to checkout?</Description>
			<ButtonWrapper>
				<Btn btnType="error">Cancel</Btn>
				<Btn btnType="success">Continue</Btn>
			</ButtonWrapper>
		</Auth>
	)
}

export default OrderSummary

//D.U. na 31 riadok dostat price, fixnut na 2 des.cisla, strong a nastylovat podla dizajnu.
