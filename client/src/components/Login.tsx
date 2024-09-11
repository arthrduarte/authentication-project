import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent) => {
        console.log("Form submited")
        event.preventDefault();

        try{

            const response = await fetch(`https://authentication-project-server-ye0z.onrender.com/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });
            
            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("Data fetched:", data)
            if (response.ok) {
                console.log(data.user)
                localStorage.setItem('user', JSON.stringify(data.user));
                console.log("Set item on local storage and navigate to /")
                navigate('/')
            } else {
                setErrorMessage(data.message)
            }
        } catch(error){
            console.error("Error during login:", error);
            setErrorMessage('An error occurred. Please try again.');
        }
    }

    return (
        <div className='flex flex-col items-center rounded-lg bg-white shadow-2xl py-[3rem] px-[5rem]'>
            <a href="/" className='block text-blue-500 hover:text-blue-700'>Go back</a>
            <h1 className='text-center font-bold text-2xl'>🔒 Login</h1>
            <p className='text-center text-base my-3'>{errorMessage}</p>
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
                <div>
                    <label htmlFor="username" className="text-sm font-medium text-gray-700">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">Login</button>
            </form>
        </div>
    )
}
