// pages/api/anilist.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido. Use POST.' })
  }

  const { page = 1, perPage = 20 } = req.body

  const query = `
    query ($page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
        }
        media {
          id
          title {
            english
          }
          genres
          averageScore
          coverImage {
            large
          }
        }
      }
    }
  `

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: { page, perPage }
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
