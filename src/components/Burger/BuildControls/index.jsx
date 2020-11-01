import React from 'react'
import styled from 'styled-components'
import BuildControl from './BuildControl'

const Wrapper = styled.div`
	width: 100%;
	background-color: #cf8f2e;
	display: flex;
	flex-flow: column;
	align-items: center;
	box-shadow: 0 2px 1px #ccc;
	margin: auto;
	padding: 10px 0;
`

const Title = styled.p`
	padding: 10px 0;
	margin-bottom: 20px;
`

const Strong = styled.strong`
	font-weight: bold;
`

const Button = styled.button`
	text-transform: uppercase;
	background-color: #dad735;
	outline: none;
	cursor: pointer;
	border: 1px solid #966909;
	color: #966909;
	font-family: inherit;
	font-size: 1.2em;
	padding: 15px 30px;
	box-shadow: 2px 2px 2px #966909;
	border-radius: 5px;
	margin-top: 20px;

	&:hover,
	&:active {
		background-color: #a0db41;
		border: 1px solid #966909;
		color: #966909;
	}

	&:disabled {
		background-color: #c7c6c6;
		cursor: not-allowed;
		border: 1px solid #ccc;
		color: #888888;
	}

	&:not(:disabled) {
		animation: enable 0.3s linear;
	}

	@keyframes enable {
		0% {
			transform: scale(1);
		}
		60% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
`

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
]

const BuildControls = props => {
	console.log(props.disabled)
	return (
		<Wrapper>
			<Title>
				Current Titleprice: <Strong>{props.price.toFixed(2)}</Strong>
			</Title>
			{controls.map(item => (
				<BuildControl
					price={props.price}
					label={item.label}
					key={item.label}
					deletedIngredients={() => props.deletedIngredients(item.type)}
					addedIngredients={() => props.addedIngredients(item.type)}
					disabled={props.disabled[item.type]}
				/>
			))}
			<Button onClick={props.ordered} disabled={!props.purchasable}>
				Order now
			</Button>
		</Wrapper>
	)
}

export default BuildControls
