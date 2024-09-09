import React from 'react'

export default function Home() {
    const userData = localStorage.getItem("user")

    if(userData){
        return (
            <>
                <h1 className='text-center font-bold text-[2rem]'>Home</h1>
                <div className='text-center space-x-5'>
                    <a href="logout">Logout</a>
                    <a href="dashboard">Dashboard</a>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1 className='text-center font-bold text-[2rem]'>Home</h1>
                <div className='text-center space-x-5'>
                    <a href="login">Login</a>
                    <a href="register">Register</a>
                </div>
            </>
        )
    }
}
