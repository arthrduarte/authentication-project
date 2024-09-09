import React from 'react'

export default function Home() {
    const userData = localStorage.getItem("user")

    return (
        <div className='flex flex-col items-center rounded-lg bg-white shadow-2xl py-[3rem] px-[5rem]'>
            <h1 className='font-bold text-2xl'>Home</h1>
            <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 py-[3rem]'>
                {userData ?
                    <>
                        <a href="logout" className='bg-blue-500 text-center mx-1 font-semibold text-white py-2 px-4 rounded hover:bg-blue-700'>Logout</a>
                        <a href="dashboard" className='bg-blue-500 text-center mx-1 font-semibold text-white py-2 px-4 rounded hover:bg-blue-700'>Dashboard</a>
                    </>
                    :
                    <>
                        <a href="login" className='bg-blue-500 text-center mx-1 font-semibold text-white py-2 px-4 shadow-2xl rounded hover:bg-blue-700'>Login</a>
                        <a href="register" className='bg-blue-500 text-center mx-1 font-semibold text-white py-2 px-4 shadow-2xl rounded hover:bg-blue-700'>Register</a>
                    </>
                }
            </div>
        </div>
    )

}
