import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieForm from './MovieForm';

describe('Movie Form Component', () => {
  const handleSubmit = jest.fn();
  const handleCancel = jest.fn();

  it('renders form fields correctly', () => {
    render(<MovieForm onSubmit={handleSubmit} onCancel={handleCancel} />);

    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    expect(screen.getByLabelText('Release Year:')).toBeInTheDocument();
    expect(screen.getByLabelText('Genre:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    render(<MovieForm onSubmit={handleSubmit} onCancel={handleCancel} />);

    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'New Movie' } });
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Description for the new movie' } });
    fireEvent.change(screen.getByLabelText('Release Year:'), { target: { value: '2024' } });
    fireEvent.change(screen.getByLabelText('Genre:'), { target: { value: 'Action' } });

    fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
      title: 'New Movie',
      description: 'Description for the new movie',
      releaseYear: '2024',
      genre: 'Action',
    }));
  });

  it('calls onCancel when Cancel button is clicked', () => {
    render(<MovieForm onSubmit={handleSubmit} onCancel={handleCancel} />);

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
