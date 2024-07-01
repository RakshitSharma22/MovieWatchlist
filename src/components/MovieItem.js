import React from 'react';
import { useDispatch } from 'react-redux';
import { movieToggled, movieDeleted } from '../features/movies/moviesSlice';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(movieToggled({ id: movie.id }));
  };

  const handleDelete = () => {
    dispatch(movieDeleted({ id: movie.id }));
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
      <button onClick={handleToggle}>
        Mark as {movie.watched ? 'Unwatched' : 'Watched'}
      </button>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${movie.id}`}>Edit</Link>
      <Link to={`/details/${movie.id}`}>Details</Link>
    </div>
  );
};

export default MovieItem;
