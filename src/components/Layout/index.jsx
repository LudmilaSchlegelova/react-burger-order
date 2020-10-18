import React from 'react'
import Auth from '../../hoc/Auth'

const Layout = props => {
	return (
		<Auth>
			<div>Toolbar,SideDrawer,Backdrop</div>
			<main>{props.children}</main>
		</Auth>
	)
}

export default Layout
