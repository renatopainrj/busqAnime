import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode
} from 'react'
import { useAuth } from './AuthContext'

interface AniListContextProps {
  formats: string[]
  isAuthenticated: boolean
  fetchAniListData: (page?: number, perPage?: number) => Promise<any>
  fetchGender: () => Promise<any>
}

const AniListContext = createContext<AniListContextProps | undefined>(undefined)

export const AniListProvider = ({ children }: { children: ReactNode }) => {
  const [formats, setFormats] = useState<string[]>([])
  const { isAuthenticated } = useAuth()

  // Função para buscar os dados da AniList
  const fetchAniListData = async (page: number = 1, perPage: number = 10) => {
    const response = await fetch('/api/anilist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page, perPage })
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados do AniList: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  }

  // Função para buscar os gêneros
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

  // useEffect para inicializar dados
  useEffect(() => {
    const init = async () => {
      if (!isAuthenticated) {
        try {
          const listAnime = await fetchAniListData()
          console.log({ listAnime })

          const { GenreCollection } = await fetchGender()
          GenreCollection.unshift('All Formats')
          setFormats(GenreCollection)

          console.log({ GenreCollection })
        } catch (error) {
          console.error('Erro ao buscar dados do AniList:', error)
        }
      }
    }

    init()
  }, [isAuthenticated])

  return (
    <AniListContext.Provider
      value={{
        formats,
        isAuthenticated,
        fetchAniListData,
        fetchGender
      }}
    >
      {children}
    </AniListContext.Provider>
  )
}

// Hook para usar o contexto
export const useAniList = () => {
  const context = useContext(AniListContext)
  if (!context) {
    throw new Error('useAniList deve ser usado dentro de um AniListProvider')
  }
  return context
}
