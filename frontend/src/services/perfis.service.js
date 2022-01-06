import axios from 'axios'

const url = 'http://localhost:9090/api/controleUsuarios/v1/perfil'

export async function listar(order) {

	return await axios.get(url + (!order ? '?ordenado=true' : ''))
}

export function salvar(perfil) {

	return axios.post(url, {...perfil})

}

export function editar(perfil) {

	return axios.put(url, {...perfil})

}

export function deletar(perfil) {
	return axios.post(url + "/deletar/", {...perfil})
}