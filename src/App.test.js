import { render, screen } from '@testing-library/react';
import App from './App';

test('it should have a correct title', () => {
  render(<App />);
  const text = screen.getByText("Counter");
  expect(text).toBeInTheDocument();
});
