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
`

const Strong = styled.strong`
	font-weight: bold;
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
				Current Titlerice: <Strong>{props.price.toFixed(2)}</Strong>
			</Title>
			{controls.map(item => (
				<BuildControl
					label={item.label}
					key={item.label}
					deletedIngredients={() => props.deletedIngredients(item.type)}
					addedIngredients={() => props.addedIngredients(item.type)}
					disabled={props.disabled[item.type]}
				/>
			))}
		</Wrapper>
	)
}

export default BuildControls
