import { useState } from 'react'

import styles from '@/styles/Main.module.css'
import SearchBar from '../SearchBar'
import AnimeCard from '../AnimeCard'
import { LoadMoreButton } from '../LoadMoreButton'
import { useAniList } from '@/context/AnimeList'

const Main = () => {
  const { animes, fetchAnimes, currentPage, totalPages, formats } = useAniList()
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All Formats')

  const handleSearch = (search: string) => {
    setSearch(search)
    console.log('çhfdgaljkçfds lçaksjdf lçasdjkf ')
    if (genre == 'All Formats') {
      fetchAnimes({ title: search, page: 1 })
    } else {
      fetchAnimes({ title: search, genre, page: 1 })
    }
  }

  const loadMore = () => {
    if (genre == 'All Formats') {
      fetchAnimes({ title: search, page: currentPage + 1 })
    } else {
      fetchAnimes({ title: search, genre, page: currentPage + 1 })
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.filter}>
        {formats &&
          formats.map((format) => (
            <button
              key={format}
              className={`${styles.button} ${
                genre === format ? styles.active : ''
              }`}
              onClick={() => {
                setGenre(format)
                if (format == 'All Formats') {
                  fetchAnimes({ title: search, page: 1 })
                } else {
                  fetchAnimes({ title: search, genre: format, page: 1 })
                }
              }}
            >
              {format}
            </button>
          ))}
      </section>
      <section>
        <SearchBar onSearch={handleSearch} />
      </section>
      <section>
        <AnimeCard animes={animes} />
      </section>
      {currentPage < totalPages && (
        <section>
          <LoadMoreButton
            onClick={async () => {
              loadMore()
            }}
          />
        </section>
      )}
    </main>
  )
}
export default Main
