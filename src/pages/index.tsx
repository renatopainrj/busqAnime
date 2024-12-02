import Head from 'next/head'
import { Mulish } from 'next/font/google'

import Footer from '@/components/Footer/intex'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Spinner from '@/components/Spinner'
import { useAniList } from '@/context/AnimeList'
import withAuth from '@/Hoc/WithAuth'

const mulish = Mulish({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish'
})

const Home = () => {
  const { loading } = useAniList()
  return (
    <>
      <Head>
        <title>BuscAnime - Renato Tiago</title>
        <meta
          name="description"
          content="App criado para buscar e classificação de animes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${mulish.variable}`}>
        {loading && (
          <section>
            <Spinner />
          </section>
        )}
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default withAuth(Home)
