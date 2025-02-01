import React from 'react';

const Message = ({ message }) => {
    return message ? <p className="mt-2 text-green-500">{message}</p> : null;
};

export default Message;