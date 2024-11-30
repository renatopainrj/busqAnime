import Footer from '@/components/Footer/intex'
import Header from '@/components/Header'
import { useAuth } from '@/context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  return (
    <>
      {' '}
      <Header />
      <section>
        <div>
          <button
            onClick={login}
            style={{ background: 'green', color: 'white' }}
          >
            Login
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}
