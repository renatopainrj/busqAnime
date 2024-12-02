import { useEffect } from 'react'

import Modal from '../Modal'
import { useAniList } from '@/context/AnimeList'
import styles from '@/styles/AnimeID.module.css'

interface Props {
  isOpen: boolean
  onClose: () => void
  id: number
}
const ModalAnimeID: React.FC<Props> = ({ isOpen = false, onClose, id }) => {
  const { anime, fetchAnimeId, clearAnime } = useAniList()
  useEffect(() => {
    if (isOpen && id) {
      const init = async () => {
        await fetchAnimeId(id)
      }
      init()
    } else {
      clearAnime()
    }
  }, [isOpen, id])
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <article className={styles.card}>
        <figure className={styles.imageWrapper}>
          <img
            src={anime.bannerImage || anime.coverImage?.large}
            alt={
              anime.title?.english || anime.title?.romaji || anime.title?.native
            }
            className={styles.image}
          />
        </figure>
        <section className={styles.content}>
          <header>
            <h2 className={styles.title}>
              {anime.title?.english ||
                anime.title?.romaji ||
                anime.title?.native}
            </h2>
          </header>
          <p className={styles.description}>
            {anime.description ? (
              <span dangerouslySetInnerHTML={{ __html: anime.description }} />
            ) : (
              'No description available.'
            )}
          </p>
          <dl className={styles.info}>
            <div>
              <span>Score:</span>
              <span>{anime.averageScore || 'N/A'}</span>
            </div>
            <div>
              <span>Status:</span>
              <span>{anime.status || 'Unknown'}</span>
            </div>
            <div>
              <span>Episodes:</span>
              <span>{anime.episodes || 'N/A'}</span>
            </div>
            <div>
              <span>Season Year:</span>
              <span>{anime.seasonYear || 'N/A'}</span>
            </div>
          </dl>
          <footer>
            <div className={styles.genres}>
              {anime.genres &&
                anime.genres.map((genre, index) => (
                  <span key={index} className={styles.genre}>
                    {genre}
                  </span>
                ))}
            </div>
          </footer>
        </section>
      </article>
    </Modal>
  )
}

export default ModalAnimeID
