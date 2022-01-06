import React, { useState, useEffect } from 'react';
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
import { Select, MenuItem, FormControl, InputLabel, Checkbox } from '@material-ui/core';


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

	// const edit = props.editPerfil
	const classes = useStyles()

    const cargos = props.cargos;
    const perfis = props.perfis;
    const fechar = props.fechar;

    const renderCargos = _ => {
        return (cargos.map((cargo) => (
            <option key={cargo.id} value={cargo.nome}>
                {cargo.nome}
            </option>)))
    }

    const renderPerfis = _ => {
        return (perfis.map(p => {
            <Checkbox key={p.id} label={p.nome}>{p.nome}</Checkbox>
        }))
    }

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h5" component="h2">
					Cadastrar
				</Typography>
				<List>
					<ListItem>
						<ListItemText>Nome: </ListItemText>
						<TextField
							id="standard-textarea"
							label="Nome"
							placeholder="Nome do Usuário"
							variant="outlined"
							size="small"
						/>
					</ListItem>
                    <ListItem>
						<ListItemText>CPF: </ListItemText>
						<TextField
							id="standard-textarea"
							label="CPF"
							placeholder="CPF"
							variant="outlined"
							size="small"
						/>
					</ListItem>
                    <ListItem>
						<ListItemText>Data de Nascimento: </ListItemText>
						<input type="date" />
					</ListItem>
                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Sexo"
                            >
                                <MenuItem value={'M'}>Masculino</MenuItem>
                                <MenuItem value={'F'}>Feminino</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>
                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel >Cargo</InputLabel>
							<Select native>
								{renderCargos}
							</Select>
						</FormControl>
                    </ListItem>
                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel >Perfis</InputLabel>
							{renderPerfis}
						</FormControl>
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
					// onClick={_ => cadastrar(usuario)}
					>
					Cadastrar
				</Button>
				<Button
					size="small"
					type="submit"
					variant="outlined"
					color="secondary"
					className={classes.button}
					startIcon={<Close />}
					onClick={_ => fechar()}
					>
					Cancelar
				</Button>
			</CardActions>
		</Card>
	);

}
