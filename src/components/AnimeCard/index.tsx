import React from 'react'
import styles from '@/styles/Grid.module.css'
import AnimeCard from './AnimeCard'

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
  console.log(animes)
  return (
    <section className={styles.grid} aria-label="Anime List">
      {!!animes &&
        animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            title={anime.title?.english}
            imageUrl={anime.coverImage?.large}
            genres={anime.genres}
            score={anime.averageScore}
          />
        ))}
    </section>
  )
}

export default AnimeGrid
