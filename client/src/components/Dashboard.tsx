import React from 'react'

export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("user") ?? '')
  console.log(userData)

  return (
    <>
      <h1 className='text-center font-bold text-[2rem]'>Dashboard</h1>
      <div className='text-center space-x-5'>
        <a href="/">Go back</a>
        <a href="logout">Logout</a>
      </div>
      <div>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
      </div>
    </>
  )
}
