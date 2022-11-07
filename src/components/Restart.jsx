import React from 'react';

const Restart = ({ resetGame }) => {
    return (
        <button className='mt-4 p-4 bg-red-700 text-white outline-none' onClick={resetGame}>
            Restart
        </button>
    );
};

export default Restart;