import React from 'react';
import StarRating from './StarRating';

const MovieItem = ({ movie, onRemove, onUpdateRating, onUpdateReview }) => {
    return (
        <div>
            <h2>
                {movie.title}
                <button
                    onClick={() => onRemove(movie.id)}
                    style={{ marginLeft: '10px' }}
                >
                    Remove
                </button>
            </h2>

            <StarRating
                rating={movie.rating}
                onRate={(newRating) => onUpdateRating(movie.id, newRating)}
            />

            <textarea
                value={movie.review}
                onChange={(e) => onUpdateReview(movie.id, e.target.value)}
                placeholder="Write your review..."
                rows="3"
                style={{ marginTop: '10px', width: '300px' }}
            />
            <hr />
        </div>
    );
};

export default MovieItem;