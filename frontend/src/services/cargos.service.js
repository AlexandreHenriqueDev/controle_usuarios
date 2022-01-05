import axios from 'axios'

const url = 'http://localhost:9090/api/controleUsuarios/v1/cargo/'

export function listar() {

	return axios.get(url)
}

export function salvar(cargo) {

	return axios.post(url, {...cargo})

}

export function editar(cargo) {

	return axios.put(url, {...cargo})

}