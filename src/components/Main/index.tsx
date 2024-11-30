import { useEffect, useState } from 'react'

import styles from '@/styles/Main.module.css'
import SearchBar from '../SearchBar'
import AnimeCard from '../AnimeCard'
import { LoadMoreButton } from '../LoadMoreButton'
import { useAniList } from '@/context/AnimeList'

const Main = () => {
  const [activeButton, setActiveButton] = useState('All Formats')
  const { formats, fetchAniListData } = useAniList()
  const [dataAnilist, setdataAnilist] = useState<any>([])

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAniListData(1, 10)
      setdataAnilist(data)
      console.log('Dados do AniList:', data)
    }

    loadData()
  }, [fetchAniListData])

  const handleSearch = (query: string): void => {
    console.log('Buscando por:', query)
    // Adicione aqui a lógica para realizar a busca
  }

  return (
    <main className={styles.main}>
      <section className={styles.filter}>
        {formats &&
          formats.map((format) => (
            <button
              key={format}
              className={`${styles.button} ${
                activeButton === format ? styles.active : ''
              }`}
              onClick={() => setActiveButton(format)}
            >
              {format}
            </button>
          ))}
      </section>
      <section>
        <SearchBar onSearch={handleSearch} />
      </section>
      <section>
        <AnimeCard animes={dataAnilist.media} />
      </section>
      <section>
        <LoadMoreButton
          onClick={() => {
            console.log('teste')
          }}
        />
      </section>
    </main>
  )
}
export default Main
