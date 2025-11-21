import React from 'react';

const StarRating = ({ rating, onRate }) => {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    onClick={() => onRate(value)}
                    style={{ cursor: 'pointer', fontSize: '24px' }}
                >
                    {value <= rating ? '⭐' : '☆'}
                </span>
            ))}
        </div>
    );
};

export default StarRating;