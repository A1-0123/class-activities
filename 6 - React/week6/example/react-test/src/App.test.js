/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders initial count as 0', () => {
    const { getByText } = render(<App />);
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });

  it('increments the count when the increment button is clicked', () => {
    const { getByText } = render(<App />);
    const incrementButton = getByText('Increment');
    const countElement = getByText('Count: 0');

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Count: 1');
  });

  it('decrements the count when the decrement button is clicked', () => {
    const { getByText } = render(<App />);
    const decrementButton = getByText('Decrement');
    const countElement = getByText('Count: 0');

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Count: -1');
  });

  it('handles multiple increments and decrements', () => {
    const { getByText } = render(<App />);
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');
    const countElement = getByText('Count: 0');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(countElement).toHaveTextContent('Count: 1');
  });
});
