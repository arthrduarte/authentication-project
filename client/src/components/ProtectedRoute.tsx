import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ProtectedRouteProps {
  Component: React.FC;
}

export default function ProtectedRoute({ Component }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const checkLogin = async () => {
    const response = await fetch('http://localhost:3000/dashboard', {
      method: 'GET',
      credentials: 'include'
    });

    if (response.ok) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
    setIsLoading(false)
  }

  React.useEffect(() => {
    checkLogin();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }


  console.log('Component name:', Component.displayName || Component.name);

  if (isAuthenticated && (Component.name === "Login" || Component.name === "Register")) {
    navigate('/')
    return null
  } 
  if (!isAuthenticated && (Component.name === "Dashboard" || Component.name === "Logout")){
    navigate('/login')
    return null
  }

  return <Component />
}
