import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const { movieId } = useParams();
  const movie = useSelector(state =>
    state.movies.movies.find(movie => movie.id === parseInt(movieId))
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
      <p>Rating: {movie.rating || 'No rating yet'}</p>
      <p>Review: {movie.review || 'No review yet'}</p>
      <Link to={`/movies/edit/${movie.id}`}>Edit Movie</Link>
    </div>
  );
};

export default MovieDetail;
