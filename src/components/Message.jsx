import React from 'react';

const Message = ({ msg }) => {
    return (
        <div className="text-5xl mt-12 mb-5 font-mono">
            {msg}
        </div>
    );
};

export default Message;