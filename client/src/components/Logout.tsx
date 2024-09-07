import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()

    useEffect(() => {

        const logout = async () => {
            const response = await fetch('http://localhost:3000/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Logout successful:', data)
                navigate('/')
            } else {
                console.error('Login failed:', data)
            }
        };
        logout()
    }, [navigate])


    return (
        <>
            <a href="/">Go back</a>
            <h1 className='text-center font-bold text-[2rem]'>You were logged out</h1>
        </>
    )
}
