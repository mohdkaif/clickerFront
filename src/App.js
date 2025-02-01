import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Game from './components/Game';

const App = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        createUser();
    }, []);

    const createUser = async () => {
        try {
            const res = await axios.post('http://localhost:5000/user/create');
            setUserId(res.data.user._id);
        } catch (err) {
            console.error('Error creating user:', err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {userId ? <Game userId={userId} /> : <p>Loading...</p>}
        </div>
    );
};

export default App;