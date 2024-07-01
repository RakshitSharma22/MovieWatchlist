// src/features/movies/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('http://localhost:3001/movies');
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    movieAdded: (state, action) => {
      state.movies.push(action.payload);
    },
    movieUpdated: (state, action) => {
      const { id, title, description, releaseYear, genre } = action.payload;
      const existingMovie = state.movies.find(movie => movie.id === id);
      if (existingMovie) {
        existingMovie.title = title;
        existingMovie.description = description;
        existingMovie.releaseYear = releaseYear;
        existingMovie.genre = genre;
      }
    },
    movieDeleted: (state, action) => {
      const { id } = action.payload;
      state.movies = state.movies.filter(movie => movie.id !== id);
    },
    movieToggled: (state, action) => {
      const { id } = action.payload;
      const existingMovie = state.movies.find(movie => movie.id === id);
      if (existingMovie) {
        existingMovie.watched = !existingMovie.watched;
      }
    },
    movieRated: (state, action) => {
      const { id, rating } = action.payload;
      const existingMovie = state.movies.find(movie => movie.id === id);
      if (existingMovie) {
        existingMovie.rating = rating;
      }
    },
    movieReviewed: (state, action) => {
      const { id, review } = action.payload;
      const existingMovie = state.movies.find(movie => movie.id === id);
      if (existingMovie) {
        existingMovie.review = review;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  movieAdded,
  movieUpdated,
  movieDeleted,
  movieToggled,
  movieRated,
  movieReviewed,
} = moviesSlice.actions;

export default moviesSlice.reducer;
