// src/styles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  min-height: 100vh;
  padding: 20px;
`;

export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: calc(25% - 20px);
  margin-bottom: 20px;
  padding: 15px;
  box-sizing: border-box;
`;

export const MovieTitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

export const MovieDetails = styled.p`
  font-size: 0.9em;
  color: #555;
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: 0 auto;

  div {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    margin-top: 20px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 5px;

  span {
    font-size: 1.5em;
    cursor: pointer;
    color: ${props => (props.active ? '#ff0' : '#ccc')};

    &:hover {
      color: #ff0;
    }
  }
`;
