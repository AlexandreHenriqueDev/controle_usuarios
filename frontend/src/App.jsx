import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '~/views/Home'
import Cargos from '~/views/Cargos'
import Perfis from '~/views/Perfis'
import Navbar from '~/components/navbar/Navbar'

export default props => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/cargos' exact={true} component={Cargos} />
				<Route path='/perfis' exact={true} component={Perfis} />
			</Switch>
		</BrowserRouter>
	)

}