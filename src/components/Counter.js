import React from 'react';

const Counter = ({ counter, prizes }) => {
    return (
        <>
            <p className="mt-2 text-xl">Counter: {counter}</p>
            <p className="mt-2 text-lg">Prizes: {prizes}</p>
        </>
    );
};

export default Counter;