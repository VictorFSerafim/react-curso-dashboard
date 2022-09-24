import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

it('deve renderizar sem erros', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
