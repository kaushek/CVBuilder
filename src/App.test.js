import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom'

test('renders heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/CV Builder/i);
  expect(linkElement).toBeInTheDocument();
});
