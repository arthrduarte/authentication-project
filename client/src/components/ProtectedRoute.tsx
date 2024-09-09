import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ProtectedRouteProps {
  Component: React.FC;
}

export default function ProtectedRoute({ Component }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const userData = localStorage.getItem("user")

  useEffect(() => {
    const checkLogin = async () => {

      if (userData) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
      setIsLoading(false)
    }

    checkLogin();
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated && (Component.name === "Login" || Component.name === "Register")) {
    navigate('/')
    return null
  }
  if (!isAuthenticated && (Component.name === "Dashboard" || Component.name === "Logout")) {
    navigate('/login')
    return null
  }

  return <Component />
}
