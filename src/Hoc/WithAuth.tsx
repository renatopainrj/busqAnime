import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ProtectedRoute = (props: any) => {
    const { isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login')
      }
    }, [isAuthenticated, router])

    if (!isAuthenticated) {
      return null
    }

    return <WrappedComponent {...props} />
  }

  return ProtectedRoute
}

export default withAuth
