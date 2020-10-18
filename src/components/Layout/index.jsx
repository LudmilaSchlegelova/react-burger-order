import React from 'react'
import Auth from '../../hoc/Auth'
import styled from 'styled-components'

const Main = styled.main`
	margin-top: 16px;
`

const Layout = props => {
	return (
		<Auth>
			<div>Toolbar,SideDrawer,Backdrop</div>
			<Main>{props.children}</Main>
		</Auth>
	)
}

export default Layout
