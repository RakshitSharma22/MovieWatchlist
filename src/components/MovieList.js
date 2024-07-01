import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/moviesSlice';
import MovieItem from './MovieItem';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const movieStatus = useSelector(state => state.movies.status);
  const error = useSelector(state => state.movies.error);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  let content;

  if (movieStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (movieStatus === 'succeeded') {
    content = movies.map(movie => (
      <MovieItem key={movie.id} movie={movie} />
    ));
  } else if (movieStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h2>Movie Watchlist</h2>
      {content}
    </div>
  );
};

export default MovieList;
