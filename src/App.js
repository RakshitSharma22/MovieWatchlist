import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditMoviePage from './pages/ AddEditMoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { AppContainer, Nav } from './styles';

function App() {
  return (
    <Router>
      <AppContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Movie</Link>
        </Nav>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/add" element={<AddEditMoviePage />} />
          <Route path="/edit/:movieId" element={<AddEditMoviePage />} />
          <Route path="/details/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
