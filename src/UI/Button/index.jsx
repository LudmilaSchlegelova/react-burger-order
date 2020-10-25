import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
	display: block;
	font: inherit;
	padding: 5px;
	margin: 0 5px;
	width: 80px;
	border: 1px solid orange;
	cursor: pointer;
	border-radius: 5px;
	outline: 0;
	background-color: transparent;
	color: ${({ btnType }) => btnType === 'success' && 'green'};
	color: ${({ btnType }) => btnType === 'error' && 'red'};

	&:disabled {
		cursor: default;
		color: #3ccc;
		background-color: #ac9980;
		border: 1px solid #7e7365;
	}

	&:hover {
		opacity: 0.8;

		&:disabled {
			background-color: #ac9980;
			color: #ccc;
			cursor: not-allowed;
		}
	}
`

const Button = props => {
	return (
		<Wrapper
			disabled={props.disabled}
			btnType={props.btnType}
			type={props.type}
			onClick={props.onClick}
			className={props.className}>
			{props.children}
		</Wrapper>
	)
}

export default Button
