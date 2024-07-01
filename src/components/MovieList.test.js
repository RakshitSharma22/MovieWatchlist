import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieList from './MovieList';

describe('Movie List Component', () => {
  const mockMovies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' }
  ];

  it('renders list of movies', () => {
    render(<MovieList movies={mockMovies} />);

    expect(screen.getByText('Movie List')).toBeInTheDocument();
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
    expect(screen.getByText('Movie 3')).toBeInTheDocument();
  });

  it('renders edit and delete buttons for each movie', () => {
    render(<MovieList movies={mockMovies} />);

    expect(screen.getAllByText('Edit')).toHaveLength(mockMovies.length);
    expect(screen.getAllByText('Delete')).toHaveLength(mockMovies.length);
  });
});
