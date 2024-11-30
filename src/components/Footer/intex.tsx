import styles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <span className={styles.buscanimeBusc}>BUSC</span>
        <span className={styles.buscanimeAnime}>ANIME</span>
      </nav>
      <nav className={styles.copyRight}>TODOS OS DIREITOS RESERVADOS</nav>
    </footer>
  )
}

export default Footer
