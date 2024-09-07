import React from 'react'

export default function Home() {
    return (
        <>
            <h1 className='text-center font-bold text-[2rem]'>Home</h1>
            <div className='text-center space-x-5'>
                <a href="login">Login</a>
                <a href="register">Register</a>
                <a href="logout">Logout</a>
            </div>
        </>)
}
