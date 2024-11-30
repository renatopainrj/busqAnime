import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <span className={styles.buscanimeBusc}>BUSC</span>
        <span className={styles.buscanimeAnime}>ANIME</span>
      </nav>
    </header>
  )
}

export default Header
