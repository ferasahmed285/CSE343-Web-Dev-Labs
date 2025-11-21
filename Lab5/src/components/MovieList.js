import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({
    movies,
    onRemoveMovie,
    onUpdateRating,
    onUpdateReview,
}) => {
    if (movies.length === 0) {
        return <p>Your watch list is empty. Add some movies!</p>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    onRemove={onRemoveMovie}
                    onUpdateRating={onUpdateRating}
                    onUpdateReview={onUpdateReview}
                />
            ))}
        </div>
    );
};

export default MovieList;