import React, { useState } from 'react'

interface User {
  id: object,
  email: string,
  username: string
}

interface DashboardData {
  user: User
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)


  const fetchDashboard = async () => {
    const response = await fetch('http://localhost:3000/dashboard', {
      method: 'GET',
      credentials: 'include'
    });

    const jsonData = await response.json()
    if (response.ok) {
      setData(jsonData)
      console.log('Dashboard', jsonData)
    } else {
      console.error('Failed to fetch dashboard')
    }
  }

  React.useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <>
      <h1 className='text-center font-bold text-[2rem]'>Dashboard</h1>
      <div className='text-center space-x-5'>
        <a href="/">Go back</a>
        <a href="logout">Logout</a>
      </div>
      <div>
        <p>{data?.user.email}</p>
        <p>{data?.user.username}</p>
      </div>
    </>
  )
}
