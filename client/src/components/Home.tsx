import React, { useState } from 'react'

export default function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

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
    
    if(isAuthenticated){
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
