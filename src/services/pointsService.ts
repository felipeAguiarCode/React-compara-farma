import axios, { AxiosResponse } from 'axios'

export async function fetchDataById(id: number): Promise<AxiosResponse> {
  try {
    // const url = `https://n8n.ninjadaautomacao.com/webhook/ifood/points?userid=${id}`
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados do servidor')
  }
}
