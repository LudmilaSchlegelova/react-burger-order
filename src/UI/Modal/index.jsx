import React from 'react'
import styled, { css } from 'styled-components'
import BurgerBuilder from '../../containers/BurgerBuilder'

const Wrapper = styled.div`
	position: fixed;
	z-index: 500;
	background-color: white;
	width: 70%;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 1px black;
	padding: 16px;
	left: 15%;
	top: 30%;
	box-sizing: border-box;
	transition: all 1s ease-out;
	${({ show }) =>
		show === false
			? css`
					transform: trasnlateY(0);
					opacity: 0;
					z-index: -1;
			  `
			: css`
					transform: trasnlateY(-100vh);
					opacity: 1;
					z-index: 1;
			  `};

	@media (min-width: 600px) {
		width: 500px;
		left: calc(50% - 250px);
	}
`

const Modal = props => {
	return <Wrapper show={props.show}>{props.children}</Wrapper>
}

export default Modal

// Modalu vytvorim atribut show, show: this.state.purchasing. ak je false tak sa robi animacia: transform: translateY(0), ak je false trasnlateY(-100vh), ak je true opacity: 1, ak false opacity:0
