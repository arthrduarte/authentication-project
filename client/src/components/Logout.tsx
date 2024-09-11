import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const [result, setResult] = useState('Logging out...')
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            console.log("Trying to log out")
            const response = await fetch(`https://authentication-project-server-ye0z.onrender.com/logout`, {
                method: 'POST',
                credentials: 'include',
            });
            const result = await response.json();
            
            console.log("Data fetched:", result)

            if (response.ok) {
                console.log("Removing local storage")
                localStorage.removeItem('user');
                navigate('/');
            } else {
                console.log("Response had a problem:", result.message)
                setResult(result.message)
            }
        };

        handleLogout();
    }, [])
    return (
        <>
            <a href="/">Go back</a>
            <h1 className='text-center font-bold text-[2rem]'>{result}</h1>
        </>
    );
}
