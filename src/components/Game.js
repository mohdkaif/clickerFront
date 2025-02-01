import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Counter from './Counter';
import Message from './Message';
import Button from './Button';

const Game = ({ userId }) => {
    const [counter, setCounter] = useState(0);
    const [prizes, setPrizes] = useState(0);
    const [message, setMessage] = useState("");

    const fetchStats = useCallback(async () => {
        try {
            const res = await axios.get(`http://localhost:5000/user/${userId}`);
            setCounter(res.data.counter);
            setPrizes(res.data.prizes);
        } catch (err) {
            console.error('Error fetching user data:', err);
        }
    }, [userId]);

    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    const handleClick = async () => {
        try {
            const res = await axios.post('http://localhost:5000/click', { userId });
            setCounter(res.data.user.counter);
            setPrizes(res.data.user.prizes);
            setMessage(res.data.reward ? 'You won a reward!' : '');
        } catch (err) {
            console.error('Error clicking button:', err);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <h1 className="text-3xl font-bold">Clicker Game</h1>
            <Counter counter={counter} prizes={prizes} />
            <Message message={message} />
            <Button handleClick={handleClick} />
        </div>
    );
};

export default Game;