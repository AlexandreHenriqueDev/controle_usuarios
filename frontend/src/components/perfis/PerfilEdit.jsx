import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles({
	root: {
		width: 400,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	button: {
		borderRadius: '20px',
		minWidth: '140px',
	},
});

export default props => {

	const perfil = props.perfil
	const alter = props.alterPerfil
	const edit = props.editPerfil
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h5" component="h2">
					Editar
				</Typography>
				<List>
					<ListItem>
						<ListItemText>Nome: </ListItemText>
						<TextField
							id="standard-textarea"
							label="Nome"
							placeholder="Nome do perfil"
							variant="outlined"
							defaultValue={perfil.nome}
							size="small"
							onChange={e => alter({ ...perfil, nome: e.target.value })}
						/>
					</ListItem>
				</List>
			</CardContent>
			<CardActions style={{ justifyContent: 'center' }}>
				<Button
					size="small"
					type="submit"
					variant="outlined"
					color="primary"
					className={classes.button}
					startIcon={<Check />}
					onClick={_ => edit(perfil)}
					disabled={!perfil || !perfil.nome}
					>
					Editar
				</Button>
				<Button
					size="small"
					type="submit"
					variant="outlined"
					color="secondary"
					className={classes.button}
					startIcon={<Close />}
					onClick={_ => props.fecharModal(false)}
					>
					Cancelar
				</Button>
			</CardActions>
		</Card>
	);

}
