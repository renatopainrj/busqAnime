// pages/api/anilist.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido. Use POST.' })
  }

  const query = `
    query {
      GenreCollection
    }
  `

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    }

    const data = await response.json()

    res.status(200).json(data.data)
  } catch (error) {
    console.error('Erro ao buscar dados de Gênero:', error)
    res.status(500).json({
      message: 'Erro ao buscar dados de Gênero:',
      error: error
    })
  }
}
