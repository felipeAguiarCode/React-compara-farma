export async function fetchPointDataById(id: number): Promise<Response> {
  try {
    const url = `https://n8n.ninjadaautomacao.com/webhook/ifood/points?userid=${id}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Erro ao obter os dados do servidor')
    }
  } catch (error) {
    throw new Error('Erro ao obter os dados do servidor')
  }
}

