import React, { useState } from 'react'
import styles from '@/styles/Grid.module.css'
import AnimeCard from './AnimeCard'
import ModalAnimeID from '../ModalAnimeId'

interface Anime {
  id: number
  title: any
  coverImage: any
  genres: string[]
  averageScore: any
}

interface AnimeGridProps {
  animes: Anime[]
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ animes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState(0)
  const closedModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ModalAnimeID id={id} isOpen={isOpen} onClose={closedModal} />
      <section className={styles.grid} aria-label="Anime List">
        {!!animes &&
          animes.map((anime) => (
            <AnimeCard
              onClick={() => {
                setId(anime.id)
                setIsOpen(true)
              }}
              key={anime.id}
              title={
                anime.title?.english ||
                anime.title?.romaji ||
                anime.title?.native
              }
              imageUrl={anime.coverImage?.large}
              genres={anime.genres}
              score={anime.averageScore}
            />
          ))}
      </section>
    </>
  )
}

export default AnimeGrid
