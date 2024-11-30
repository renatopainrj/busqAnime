import { AniListProvider } from '@/context/AnimeList'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AniListProvider>
        <Component {...pageProps} />
      </AniListProvider>
    </AuthProvider>
  )
}
