import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
    const [newMovieTitle, setNewMovieTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTitle = newMovieTitle.trim();

        if (!trimmedTitle) return;

        onAddMovie(trimmedTitle);
        setNewMovieTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newMovieTitle}
                onChange={(e) => setNewMovieTitle(e.target.value)}
                placeholder="Enter a new movie title"
            />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovieForm;