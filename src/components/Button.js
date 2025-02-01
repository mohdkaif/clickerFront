import React from 'react';

const Button = ({ handleClick }) => {
    return (
        <button 
            onClick={handleClick} 
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
            Click Me
        </button>
    );
};

export default Button;