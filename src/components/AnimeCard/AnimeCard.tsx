import styles from '@/styles/AnimeCard.module.css'
import { getScoreColor } from '@/utils'

interface AnimeCardProps {
  title: string
  imageUrl: string
  genres: string[]
  score: number
  onClick: () => void
}

export const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  imageUrl,
  genres,
  score,
  onClick
}) => {
  return (
    <article className={styles.card} onClick={() => onClick()}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.genres}>
          {genres.map((genre, index) => (
            <span key={index} className={styles.genre}>
              {genre}
            </span>
          ))}
        </div>
        <div
          className={styles.score}
          style={{ backgroundColor: getScoreColor(score) }}
        >
          {!score ? 0 : score}%
        </div>
      </div>
    </article>
  )
}

export default AnimeCard
