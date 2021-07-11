import React from 'react';
import { render, screen } from '@testing-library/react';
import StarioApp from './StarioApp';

test('renders learn react link', () => {
  render(<StarioApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
