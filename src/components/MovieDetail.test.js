import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieDetail from './MovieDetail';

describe('Movie Detail Component', () => {
  const mockMovie = {
    id: 1,
    title: 'Example Movie',
    description: 'This is a mock movie for testing.',
    releaseYear: 2023,
    genre: 'Action',
    watched: false,
    rating: 4,
    review: 'Great movie!'
  };

  it('renders movie details correctly', () => {
    render(<MovieDetail movie={mockMovie} />);

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.description)).toBeInTheDocument();
    expect(screen.getByText(`Release Year: ${mockMovie.releaseYear}`)).toBeInTheDocument();
    expect(screen.getByText(`Genre: ${mockMovie.genre}`)).toBeInTheDocument();
    expect(screen.getByText(`Watched: No`)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${mockMovie.rating}/5`)).toBeInTheDocument();
    expect(screen.getByText(`Review: ${mockMovie.review}`)).toBeInTheDocument();
  });
});
