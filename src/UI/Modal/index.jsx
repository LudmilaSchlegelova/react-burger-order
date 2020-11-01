import React from 'react'
import styled from 'styled-components'
import Auth from '../../hoc/Auth'
import Backdrop from '../../UI/Backdrop'

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
	transition: all 0.3s ease-out;
	transform: translateY(-100vh);
	transform: ${({ show }) => show && 'translateY(0)'};

	@media (min-width: 600px) {
		width: 500px;
		left: calc(50% - 250px);
	}
`

const Modal = props => (
	<Auth>
		<Backdrop clicked={props.modalClosed} show={props.show} />
		<Wrapper show={props.show}>{props.children}</Wrapper>
	</Auth>
)

export default Modal

// Modalu vytvorim atribut show, show: this.state.purchasing. ak je false tak sa robi animacia: transform: translateY(0), ak je false trasnlateY(-100vh), ak je true opacity: 1, ak false opacity:0
