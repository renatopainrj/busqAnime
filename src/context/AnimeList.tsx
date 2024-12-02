import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode
} from 'react'

interface Anime {
  id: number
  title: {
    english?: string
    romaji?: string
    native?: string
  }
  averageScore: number
  genres: string[]
  coverImage: any
  description?: string
  status?: string
  episodes: number
  seasonYear: number
  bannerImage: string
}

interface AniListContextProps {
  formats: string[]
  animes: Anime[]
  anime: Anime
  currentPage: number
  totalPages: number
  loading: boolean
  error: string | null
  fetchAnimes: (params: {
    genre?: string
    title?: string
    page?: number
    perPage?: number
  }) => Promise<void>
  fetchGender: () => Promise<any>
  fetchAnimeId: (id: number) => Promise<any>
  setPage: (page: number) => void
}

const AniListContext = createContext<AniListContextProps | undefined>(undefined)

export const AniListProvider = ({ children }: { children: ReactNode }) => {
  const [formats, setFormats] = useState<string[]>([])

  const [animes, setAnimes] = useState<Anime[]>([])
  const [anime, setAnime] = useState<Anime>({
    id: 0,
    title: {
      romaji: '',
      english: '',
      native: ''
    },
    averageScore: 0,
    genres: [],
    coverImage: null,
    description: '',
    episodes: 0,
    status: '',
    seasonYear: 0,
    bannerImage: ''
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAnimes = async (params: {
    genre?: string
    title?: string
    page?: number
    perPage?: number
  }) => {
    const { genre = null, title = null, page = 1, perPage = 10 } = params

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/anilist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ genre, search: title, page, perPage })
      })

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`)
      }

      const data = await response.json()

      if (page == 1) {
        setAnimes(data.media)
      } else {
        setAnimes((prevAnimes) => [...prevAnimes, ...data.media])
      }

      setTotalPages(Math.ceil(data.pageInfo.total / perPage))
      setCurrentPage(page)
    } catch (err: any) {
      setError(err.message || 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const fetchGender = async () => {
    const response = await fetch('/api/gender', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error(
        `Erro ao buscar gêneros do AniList: ${response.statusText}`
      )
    }

    const data = await response.json()
    return data
  }

  const fetchAnimeId = async (id: number) => {
    if (id != 0) {
      const response = await fetch('/api/animeID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })

      if (!response.ok) {
        throw new Error(
          `Erro ao buscar gêneros do AniList: ${response.statusText}`
        )
      }

      const data = await response.json()
      setAnime(data)
    }
  }

  useEffect(() => {
    const init = async () => {
      try {
        fetchAnimes({ page: 1 })
        const { GenreCollection } = await fetchGender()
        GenreCollection.unshift('All Genres')
        setFormats(GenreCollection)
      } catch (error) {
        console.error('Erro ao buscar dados do AniList:', error)
      }
    }

    init()
  }, [])

  const setPage = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page)
    }
  }

  return (
    <AniListContext.Provider
      value={{
        anime,
        formats,
        animes,
        currentPage,
        totalPages,
        loading,
        error,
        fetchAnimes,
        fetchGender,
        fetchAnimeId,
        setPage
      }}
    >
      {children}
    </AniListContext.Provider>
  )
}

export const useAniList = () => {
  const context = useContext(AniListContext)
  if (!context) {
    throw new Error('useAniList deve ser usado dentro de um AniListProvider')
  }
  return context
}
