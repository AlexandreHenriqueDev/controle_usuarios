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
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import Modal from '@material-ui/core/Modal';
import Close from '@material-ui/icons/Close';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { listar, salvar, editar, deletar } from '~/services/perfis.service';

import PerfilEdit from '~/components/perfis/PerfilEdit';

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
	const [newElem, setNewElem] = useState(false)
	const [perfilAdd, setPerfil] = useState({
		nome: ''
	})

	const [buscaOrdenada, setBuscaOrdenada] = useState(false)

	const [perfis, setPerfis] = useState()
	useEffect(_ => {
		listar(buscaOrdenada).then(response => {
			setPerfis(response.data);
		})
	}, [])

	function salvarPerfil() {

		setNewElem(false)
		salvar(perfilAdd).then(response => {
			listar(buscaOrdenada).then(response => {
				setPerfis(response.data);
			})
		})
		.catch(e => {
			console.log(e);
		});

	}

	const [open, setOpen] = useState(false);
	const [perfilEditar, setPerfilEditar] = useState(null);

	const handleOpen = (o, p) => {
		setOpen(o);
		setPerfilEditar(p);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleEditPerfil = perfil => {
		setPerfilEditar(perfil)
		setOpen(false)
		editar(perfil)
		.then(response => {
			listar(buscaOrdenada).then(response => {
				setPerfis(response.data);
			})
		})
		.catch(e => {
			console.log(e);
		});
	}

	function handleRemove(perfil) {
		deletar(perfil)
		.then(response => {
			listar(buscaOrdenada).then(response => {
				setPerfis(response.data);
			})
		})
		.catch(e => {
			console.log(e);
		});
	}

	const buscar = _ => {
		setBuscaOrdenada(!buscaOrdenada);
		listar(buscaOrdenada).then(response => {
			setPerfis(response.data);
		})
	}

	function addRegion() {
		if (newElem) {
			return (
				<TableRow key={'new'}>
					<TableCell component="th" scope="row">
						<TextField
							id="standard-textarea"
							label="Nome"
							placeholder="Nome do perfil"
							variant="outlined"
							size="small"
							onChange={e => setPerfil({ ...perfilAdd, nome: e.target.value })}
						/>
					</TableCell>
					<TableCell align="right">
						<Button type="submit" size="small" color="primary" disabled={!perfilAdd || !perfilAdd.nome} variant="outlined" className={classes.button} startIcon={<Check />} onClick={_ => salvarPerfil()}>
							Salvar
							</Button>
						<Button type="submit" size="small" variant="outlined" color="secondary" className={classes.button} startIcon={<Close />} onClick={_ => setNewElem(false)}>
							Cancelar
							</Button>
					</TableCell>
				</TableRow>
			)
		} else {
			return (
				<></>
			)
		}
	}

	function buttonAdd() {
		if (!newElem) {
			return (
				<Button
					size="small"
					type="submit"
					color="primary"
					className={classes.button}
					startIcon={<Add />}
					onClick={_ => setNewElem(true)}
					style={{ width: '100%' }}
				>
					Adicionar
				</Button>
			)
		}
		else return (<></>)
	}

	function renderPerfis() {
		let tabelaPerfis = perfis && perfis.length > 0 
			? perfis.map((row) => (
				<TableRow key={row.id}>
						<TableCell component="th" scope="row">
							{row.nome}
						</TableCell>
						<TableCell align="right">
							<IconButton size="small" color="primary" aria-label="add" onClick={_ => handleOpen(true, row)}>
								<Edit />
							</IconButton>
							<IconButton size="small" color="primary" aria-label="add" onClick={_ => handleRemove(row)}>
								<Remove />
							</IconButton>
						</TableCell>
				</TableRow>))
			: <></>;
		return tabelaPerfis;
	}

	return (
		<>
			<TableContainer component={Paper} align="center">
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<h3>
									Nome do perfil
								</h3>
								<FormGroup>
									<FormControlLabel control={<Switch defaultValue={buscaOrdenada} onChange={buscar}/>} label="Ordenado" />
								</FormGroup>
							</TableCell>
							<TableCell align="right">
								<h3>
									Ações
								</h3>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{renderPerfis()}
						{addRegion()}
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
				<PerfilEdit perfil={perfilEditar || perfilAdd} editPerfil={handleEditPerfil} alterPerfil={setPerfilEditar} fecharModal={handleClose}/>
			</Modal>
		</>
	)

}