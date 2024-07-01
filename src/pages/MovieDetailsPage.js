// src/pages/MovieDetailsPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { movieToggled, movieRated, movieReviewed } from '../features/movies/moviesSlice';
import { MovieTitle, MovieDetails, Button, Rating } from '../styles';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movies.movies.find(movie => movie.id === parseInt(movieId)));
  const [rating, setRating] = useState(movie?.rating || 0);
  const [review, setReview] = useState(movie?.review || '');

  const handleToggleWatch = () => {
    dispatch(movieToggled({ id: movie.id }));
  };

  const handleRating = (newRating) => {
    setRating(newRating);
    dispatch(movieRated({ id: movie.id, rating: newRating }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    dispatch(movieReviewed({ id: movie.id, review }));
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDetails>{movie.description}</MovieDetails>
      <MovieDetails>{movie.releaseYear}</MovieDetails>
      <MovieDetails>{movie.genre}</MovieDetails>
      <MovieDetails>{movie.watched ? 'Watched' : 'Not Watched'}</MovieDetails>
      <Button onClick={handleToggleWatch}>
        {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
      </Button>
      <div>
        <h3>Rate this movie</h3>
        <Rating>
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              style={{ color: star <= rating ? '#ff0' : '#ccc' }}
            >
              ★
            </span>
          ))}
        </Rating>
      </div>
      <div>
        <h3>Review this movie</h3>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
          />
          <Button type="submit">Submit Review</Button>
        </form>
      </div>
      {movie.rating && <MovieDetails>Rating: {movie.rating}/5</MovieDetails>}
      {movie.review && <MovieDetails>Review: {movie.review}</MovieDetails>}
    </div>
  );
};

export default MovieDetailsPage;
