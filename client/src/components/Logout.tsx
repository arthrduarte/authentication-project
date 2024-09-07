import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3000/logout', {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
            });
            const result = await response.json();
            if (response.ok) {
                console.log(result.message);
                // Redirect to home or login page
                navigate('/'); // Use the navigate function instead of useNavigate
            } else {
                console.error(result.message);
            }
        } catch (error) {
            console.error('An error occurred during logout:', error);
        }
    };

    React.useEffect(() => {
        handleLogout();
    }, []);

    return (
        <>
            <a href="/">Go back</a>
            <h1 className='text-center font-bold text-[2rem]'>Log out</h1>
        </>
    );
}
