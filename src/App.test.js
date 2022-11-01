import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders baking planner', () => {
  render(<App />);
  const element = screen.getByText(/Welcome/i);
  expect(element).toBeInTheDocument();
});