import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido. Use POST.' })
  }

  const { genre, search, page = 1, perPage = 10 } = req.body

  // Ajusta a query para incluir dinamicamente os filtros
  const query = `
    query ($page: Int, $perPage: Int, $search: String, $genre_in: [String]) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
        }
        media(search: $search, genre_in: $genre_in) {
          id
          title {
            romaji
            english
            native
          }
          averageScore
          coverImage {
            large
          }
          genres
        }
      }
    }
  `

  // Constrói as variáveis com base nos filtros fornecidos
  const variables: Record<string, any> = { page, perPage }

  if (search) {
    variables.search = search
  }
  if (genre) {
    variables.genre_in = [genre]
  }

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    }

    const data = await response.json()

    res.status(200).json(data.data.Page)
  } catch (error) {
    console.error('Erro ao buscar dados do AniList:', error)
    res.status(500).json({
      message: 'Erro ao buscar dados do AniList',
      error: error
    })
  }
}
