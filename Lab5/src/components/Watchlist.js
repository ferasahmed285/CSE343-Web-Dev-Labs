import React, { useState } from 'react';
import MovieList from './MovieList';
import AddMovieForm from './AddMovieForm';

const INITIAL_MOVIES = [
    {
        id: 1,
        title: 'Oppenheimer',
        rating: 5,
        review: 'A truly compelling and intense biopic.',
    },
    {
        id: 2,
        title: 'Dune: Part Two',
        rating: 4,
        review: 'Amazing visuals and sound design.',
    },
];

const Watchlist = () => {
    const [movies, setMovies] = useState(INITIAL_MOVIES);

    const handleAddMovie = (title) => {
        const isDuplicate = movies.some(
            (movie) => movie.title.toLowerCase() === title.toLowerCase()
        );

        if (isDuplicate) {
            alert('This movie is already in your list.');
            return;
        }

        const newMovie = {
            id: Date.now(),
            title: title,
            rating: 0,
            review: '',
        };
        setMovies([...movies, newMovie]);
    };

    const handleRemoveMovie = (movieId) => {
        setMovies(movies.filter((movie) => movie.id !== movieId));
    };

    const handleUpdateRating = (movieId, newRating) => {
        setMovies(
            movies.map((movie) =>
                movie.id === movieId ? { ...movie, rating: newRating } : movie
            )
        );
    };

    const handleUpdateReview = (movieId, newReview) => {
        setMovies(
            movies.map((movie) =>
                movie.id === movieId ? { ...movie, review: newReview } : movie
            )
        );
    };

    return (
        <div>
            <h1>My Movie Watch List</h1>
            <AddMovieForm onAddMovie={handleAddMovie} />
            <hr />
            <MovieList
                movies={movies}
                onRemoveMovie={handleRemoveMovie}
                onUpdateRating={handleUpdateRating}
                onUpdateReview={handleUpdateReview}
            />
        </div>
    );
};

export default Watchlist;