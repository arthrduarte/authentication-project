import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Delete() {
    const [result, setResult] = useState('Deleting...')
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleDelete = async () => {
            const response = await fetch(`https://authentication-project-server-ye0z.onrender.com/delete`, {
                method: 'POST',
                credentials: 'include',
            });
            const result = await response.json();
            if (response.ok) {
                localStorage.removeItem('user');
                navigate('/');
            } else {
                setResult(result.message)
            }
        };

        handleDelete();
    }, [])
    return (
        <>
            <a href="/">Go back</a>
            <h1 className='text-center font-bold text-[2rem]'>{result}</h1>
        </>
    );
}
