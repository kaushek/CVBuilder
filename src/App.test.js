import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom'

/*  This page handles the unit testing scripts of the application. 
    the below one checks whether the header is rendered properly */
test('renders heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/CV Builder/i);
  expect(linkElement).toBeInTheDocument();
});
