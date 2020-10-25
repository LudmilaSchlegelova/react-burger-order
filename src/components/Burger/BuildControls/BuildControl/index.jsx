import React from 'react'
import styled from 'styled-components'
import Button from '../../../../UI/Button'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
`
const ButtonLess = styled(Button)`
	background-color: #d39952;
	color: white;

	&:hover {
		background-color: #daa972;
		color: white;
	}
`
const ButtonMore = styled(Button)`
	background-color: #8f5e1e;
	color: white;

	&:hover {
		background-color: #99703f;
		color: white;
	}
`

const Label = styled.label`
	padding: 10px;
	font-weight: bold;
	width: 80px;
`

const BuildControl = props => {
	return (
		<Wrapper>
			<Label>{props.label}</Label>
			<ButtonLess disabled={props.disabled} onClick={props.deletedIngredients}>
				Less
			</ButtonLess>
			<ButtonMore onClick={props.addedIngredients}>More</ButtonMore>
		</Wrapper>
	)
}

export default BuildControl

//tu volam funkcie, cez onClick
