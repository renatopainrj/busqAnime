import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://anilist.co/api/v2/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      })

      const data = await response.json()

      if (!response.ok) {
        return res.status(response.status).json(data)
      }

      res.status(200).json(data)
    } catch (error) {
      console.error('Erro no fetch para AniList:', error)
      res.status(500).json({ error: 'Erro ao comunicar com AniList' })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' })
  }
}
