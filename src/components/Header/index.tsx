import { useAuth } from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

const Header = () => {
  const { login, logout, isAuthenticated } = useAuth()
  return (
    <header className={styles.header}>
      <nav>
        <span className={styles.buscanimeBusc}>BUSC</span>
        <span className={styles.buscanimeAnime}>ANIME</span>
      </nav>
      <div>
        {isAuthenticated ? (
          <button
            onClick={logout}
            style={{ background: 'red', color: 'white' }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={login}
            style={{ background: 'green', color: 'white' }}
          >
            Login
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
