import styles from '@/styles/AnimeCard.module.css'

interface AnimeCardProps {
  title: string
  imageUrl: string
  genres: string[]
  score: number
}

export const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  imageUrl,
  genres,
  score
}) => {
  return (
    <article className={styles.card}>
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
          {score}%
        </div>
      </div>
    </article>
  )
}

// Define cores baseadas no valor do rating
const getScoreColor = (score: number) => {
  if (score >= 80) return '#4caf50' // Verde
  if (score >= 51) return '#ff9800' // Laranja
  return '#f44336' // Vermelho
}

export default AnimeCard
