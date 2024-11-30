import React from 'react'
import styles from '@/styles/Grid.module.css'
import AnimeCard from './AnimeCard'

interface Anime {
  id: number
  title: string
  imageUrl: string
  genres: string[]
  score: number // Percentual de avaliação
}

interface AnimeGridProps {
  animes: Anime[]
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ animes }) => {
  return (
    <section className={styles.grid} aria-label="Anime List">
      {animes.map((anime) => (
        <AnimeCard
          key={anime.id}
          title={anime.title}
          imageUrl={anime.imageUrl}
          genres={anime.genres}
          score={anime.score}
        />
      ))}
    </section>
  )
}

export default AnimeGrid
