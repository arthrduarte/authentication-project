import React from 'react'

export default function Login() {
    return (
        <>
            <a href="/">Go back</a>
            <h1 className='text-center font-bold text-[2rem]'>Login</h1>
            <form method="post">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
