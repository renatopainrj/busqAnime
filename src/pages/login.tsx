import Footer from '@/components/Footer/intex'
import Header from '@/components/Header'
import { useAuth } from '@/context/AuthContext'
import styles from '@/styles/Login.module.css'

export default function Login() {
  const { login } = useAuth()
  return (
    <>
      {' '}
      <Header />
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <span className={styles.description}>
              Clique no botão abaixo para realizar login
            </span>
          </div>
        </header>
        <section className={styles.section}>
          <div>
            <button onClick={login} className={styles.loginButton}>
              Login
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
