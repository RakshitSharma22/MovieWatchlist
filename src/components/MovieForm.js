import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { movieAdded, movieUpdated } from '../features/movies/moviesSlice';

const MovieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId } = useParams();

  const movie = useSelector(state => 
    state.movies.movies.find(movie => movie.id === parseInt(movieId))
  );

  const [title, setTitle] = useState(movie ? movie.title : '');
  const [description, setDescription] = useState(movie ? movie.description : '');
  const [releaseYear, setReleaseYear] = useState(movie ? movie.releaseYear : '');
  const [genre, setGenre] = useState(movie ? movie.genre : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieId) {
      dispatch(movieUpdated({ id: parseInt(movieId), title, description, releaseYear, genre }));
    } else {
      dispatch(movieAdded({ id: Date.now(), title, description, releaseYear, genre }));
    }

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Release Year:</label>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
      </div>
      <div>
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <button type="submit">Save Movie</button>
    </form>
  );
};

export default MovieForm;
