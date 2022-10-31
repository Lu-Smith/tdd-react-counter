import { render, screen } from '@testing-library/react';
import App from './App';

test('it should have a correct title', () => {
  render(<App />);
  const titleCounter = screen.getByText("Counter");
  expect(titleCounter).toBeInTheDocument();
  const titleMultiplication = screen.getByText("Multiplication x 2");
  expect(titleMultiplication).toBeInTheDocument();
});
