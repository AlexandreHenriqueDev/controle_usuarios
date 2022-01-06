import axios from 'axios'

const url = 'http://localhost:9090/api/controleUsuarios/v1/usuario'

export async function listar() {
	return await axios.get(url)
}

export async function cadastrar(cargo) {

	return await axios.post(url, {...cargo})

}
