import axios from 'axios'

const url = 'http://localhost:9090/api/controleUsuarios/v1/cargo'

export async function listar(order) {
	return await axios.get(url + (!order ? '?ordenado=true' : ''))
}

export function salvar(cargo) {

	return axios.post(url, {...cargo})

}

export function editar(cargo) {

	return axios.put(url, {...cargo})

}