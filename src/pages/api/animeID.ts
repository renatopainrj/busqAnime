import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido. Use POST.' })
  }

  const { id } = req.body

  const query = `
    query ($id: Int) {
  Media(id: $id) {
    id
    title {
      romaji
      english
      native
    }
    description
    status
    genres
    averageScore
    popularity
    episodes
    duration
    season
    seasonYear
    format
    studios {
      nodes {
        id
        name
      }
    }
    characters {
      edges {
        role
        node {
          id
          name {
            full
            native
          }
          image {
            large
          }
        }
      }
    }
    staff {
      edges {
        role
        node {
          id
          name {
            full
            native
          }
          image {
            large
          }
        }
      }
    }
    coverImage {
      large
      medium
    }
    bannerImage
    tags {
      id
      name
      description
      rank
    }
  }
}

  `

  const variables: Record<string, any> = { id }

  if (id) {
    variables.id = id
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

    res.status(200).json(data.data.Media)
  } catch (error) {
    console.error('Erro ao buscar dados do AniList:', error)
    res.status(500).json({
      message: 'Erro ao buscar dados do AniList',
      error: error
    })
  }
}
