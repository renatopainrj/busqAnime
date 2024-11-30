import { useState } from 'react'

import styles from '@/styles/Main.module.css'
import { formats } from '@/utils/formatsFilter'
import SearchBar from '../SearchBar'
import AnimeCard from '../AnimeCard'
import { LoadMoreButton } from '../LoadMoreButton'

const Main = () => {
  const [activeButton, setActiveButton] = useState('All Formats')

  const handleSearch = (query: string): void => {
    console.log('Buscando por:', query)
    // Adicione aqui a lógica para realizar a busca
  }

  const animes = [
    {
      id: 1,
      title: 'One Piece',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 50
    },
    {
      id: 1,
      title: 'One Piece',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 50
    },
    {
      id: 1,
      title: 'One Piece',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 50
    },
    {
      id: 1,
      title: 'One Piece',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 50
    },
    {
      id: 1,
      title: 'One Piece',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 50
    },
    {
      id: 1,
      title: 'One Piece',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 50
    },
    {
      id: 2,
      title: 'Jujutsu Kaisen',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 30
    },
    {
      id: 2,
      title: 'Jujutsu Kaisen',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 70
    },
    {
      id: 2,
      title: 'Jujutsu Kaisen',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 86
    },
    {
      id: 2,
      title: 'Jujutsu Kaisen',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 86
    },
    {
      id: 2,
      title: 'Jujutsu Kaisen',
      imageUrl:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      score: 86
    }
    // Outros animes...
  ]

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
        <AnimeCard animes={animes} />
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
