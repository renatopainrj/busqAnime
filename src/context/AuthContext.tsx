import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { useRouter } from 'next/router'

interface AuthContextType {
  token: string | null
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI as string
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET as string
const AUTH_URL = `https://anilist.co/api/v2/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [token, setToken] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const login = () => {
    window.location.href = AUTH_URL
  }

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code && !token) {
      fetchToken(code)
    }
  }, [token])

  const fetchToken = async (code: string) => {
    try {
      const response = await fetch('/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          grant_type: 'authorization_code',
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          code
        })
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('Erro na API:', data)
        return
      }

      if (data.access_token) {
        setToken(data.access_token)
        localStorage.setItem('token', data.access_token)
        router.push('/')
      }
    } catch (error) {
      console.error('Erro ao obter o token:', error)
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
    router.push('/')
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
