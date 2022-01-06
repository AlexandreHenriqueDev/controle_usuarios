import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import Modal from '@material-ui/core/Modal';
import Close from '@material-ui/icons/Close';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { listar, cadastrar } from '~/services/usuario.service';
import NovoUsuario from './NovoUsuario';

import { listar as listarCargos } from '~/services/cargos.service';
import { listar as listarPerfis } from '~/services/perfis.service';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	button: {
		borderRadius: '20px',
		minWidth: '140px',
		margin: '1px 0'
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default _ => {
	const classes = useStyles();

	const [usuarios, setUsuarios] = useState()


	const [open, setOpen] = useState(false);

	const [cargos, setCargos] = useState({nome: ''})
    const [perfis, setPerfis] = useState({nome: ''})


	const handleOpen = (o) => {
		listarCargos().then(response => {
			setCargos(response.data);
			listarPerfis().then(response => {
				setPerfis(response.data);
				setOpen(o);
			});
		}); 
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(_ => {
		listar().then(response => {
			setUsuarios(response.data);
		})
	}, [])

	

	function buttonAdd() {
		return (
			<Button
				size="small"
				type="submit"
				color="primary"
				className={classes.button}
				startIcon={<Add />}
				onClick={_ => handleOpen(true)}
				style={{ width: '100%' }}
			>
				Adicionar
			</Button>
		)
	}

	function renderUsuarios() {
		let tabelaUsuarios = usuarios && usuarios.length > 0 
			? usuarios.map((row) => (
				<TableRow key={row.id}>
						<TableCell component="th" scope="row">
							{row.pessoa.nome}
						</TableCell>
						<TableCell component="th" scope="row">
							{row.pessoa.dataNascimento}
						</TableCell>
						<TableCell component="th" scope="row">
							{row.pessoa.sexo}
						</TableCell>
						<TableCell component="th" scope="row">
							{row.pessoa.cpf}
						</TableCell>
						<TableCell component="th" scope="row">
							{row.cargo.nome}
						</TableCell>
						<TableCell component="th" scope="row">
						<FormControl sx={{ m: 1, minWidth: 300, maxWidth: 300 }}>
							<Select native>
								{row.perfis.map((perfil) => (
									<option key={perfil.id} value={perfil.nome}>
										{perfil.nome}
									</option>
								))}
							</Select>
						</FormControl>
						</TableCell>
				</TableRow>))
			: <></>;
		return tabelaUsuarios;
	}

	return (
		<>
			<TableContainer component={Paper} align="center">
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<h3>
									Nome do usuário
								</h3>
							</TableCell>
							<TableCell>
								<h3>
									Data de Nascimento
								</h3>
							</TableCell>
							<TableCell>
								<h3>
									Sexo
								</h3>
							</TableCell>
							<TableCell>
								<h3>
									CPF
								</h3>
							</TableCell>
							<TableCell>
								<h3>
									Cargo
								</h3>
							</TableCell>
							<TableCell>
								<h3>
									Perfis
								</h3>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{renderUsuarios()}
					</TableBody>
				</Table>
				{buttonAdd()}
			</TableContainer>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				className={classes.modal}
			>
				<NovoUsuario cargos={cargos} perfis={perfis} fechar={handleClose}/>
			</Modal>
		</>
	)

}