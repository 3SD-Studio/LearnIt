import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/navbar/navbar';


test('renders navbar react component', () => {
  render(<Navbar />);
  const nabarButtonElement = screen.getByText("button-name");
  const nabarTitleElement = screen.getByText("LearnIt");
  expect(nabarButtonElement).toBeInTheDocument();
  expect(nabarTitleElement).toBeInTheDocument();
})