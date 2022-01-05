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
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import Modal from '@material-ui/core/Modal';
import Close from '@material-ui/icons/Close';

import { listar, salvar, editar } from '~/services/cargos.service';

import CardEdit from '~/components/cargos/CargoEdit';

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
	const [cargoAdd, setCargo] = useState({
		nome: ''
	})

	const [cargos, setCargos] = useState()
	useEffect(_ => {
		listar().then(response => {
			setCargos(response.data);
		})
	}, [])

	function salvarCargo() {

		setNewElem(false)
		salvar(cargoAdd).then(response => {
			setCargos(response.data);
			listar().then(response => {
				setCargos(response.data);
			})
		})
		.catch(e => {
			console.log(e);
		});

	}

	const [open, setOpen] = useState(false);
	const [cargoEditar, setCargoEditar] = useState(null);

	const handleOpen = (o, p) => {
		setOpen(o);
		setCargoEditar(p);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleEditCargo = prod => {
		setCargoEditar(prod)
		setOpen(false)
		editar(prod)
		.then(response => {
			setCargos(response.data);
			listar().then(response => {
				setCargos(response.data);
			})
		})
		.catch(e => {
			console.log(e);
		});
	}

	function addRegion() {
		if (newElem) {
			return (
				<TableRow key={'new'}>
					<TableCell component="th" scope="row">
						<TextField
							id="standard-textarea"
							label="Nome"
							placeholder="Nome do cargo"
							variant="outlined"
							size="small"
							onChange={e => setCargo({ ...cargoAdd, nome: e.target.value })}
						/>
					</TableCell>
					<TableCell align="right">
						<Button type="submit" size="small" color="primary" disabled={!cargoAdd || !cargoAdd.nome} variant="outlined" className={classes.button} startIcon={<Check />} onClick={_ => salvarCargo()}>
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

	function renderCargos() {
		let tabelaCargos = cargos && cargos.length > 0 
			? cargos.map((row) => (
				<TableRow key={row.id}>
						<TableCell component="th" scope="row">
							{row.nome}
						</TableCell>
						<TableCell align="right">
							<IconButton size="small" color="primary" aria-label="add" onClick={_ => handleOpen(true, row)}>
								<Edit />
							</IconButton>
						</TableCell>
				</TableRow>))
			: <></>;
		return tabelaCargos;
	}

	return (
		<>
			<TableContainer component={Paper} align="center">
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<h3>
									Nome do cargo
								</h3>
							</TableCell>
							<TableCell align="right">
								<h3>
									Ações
								</h3>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{renderCargos()}
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
				<CardEdit cargo={cargoEditar || cargoAdd} editCargo={handleEditCargo} alterCargo={setCargoEditar}/>
			</Modal>
		</>
	)

}