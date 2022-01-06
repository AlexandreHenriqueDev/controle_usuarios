import React from 'react'
import PerfisTable from '~/components/perfis/PerfisTable'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

export default _ => {

	return (
		<div style={{backgroundColor: '#9ea8dd'}}>
			<Container maxWidth="md" id="home" style={{backgroundColor: '#dde1f3', minHeight: '100vh'}}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<h1 style={{color: '#fff', margin: '5vh 0'}}>Sistema de controle de usuários - Perfis</h1>
				</Grid>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<PerfisTable/>
				</Grid>
			</Container>
		</div>
	)

}