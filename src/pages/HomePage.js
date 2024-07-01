// src/pages/HomePage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { movieDeleted, movieToggled } from '../features/movies/moviesSlice';
import { MovieList, MovieItem, MovieTitle, MovieDetails, Button } from '../styles';

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  const handleDelete = (id) => {
    dispatch(movieDeleted({ id }));
  };

  const handleToggleWatch = (id) => {
    dispatch(movieToggled({ id }));
  };

  return (
    <MovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetails>{movie.description}</MovieDetails>
          <MovieDetails>{movie.releaseYear}</MovieDetails>
          <MovieDetails>{movie.genre}</MovieDetails>
          <MovieDetails>{movie.watched ? 'Watched' : 'Not Watched'}</MovieDetails>
          <Link to={`/details/${movie.id}`}><Button>Details</Button></Link>
          <Link to={`/edit/${movie.id}`}><Button>Edit</Button></Link>
          <Button onClick={() => handleToggleWatch(movie.id)}>
            {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
          </Button>
          <Button onClick={() => handleDelete(movie.id)}>Delete</Button>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default HomePage;
