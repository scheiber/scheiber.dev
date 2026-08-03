import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the header name link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const nameHeading = screen.getByRole('heading', { name: 'Jonathan Scheiber' });
  expect(nameHeading).toBeInTheDocument();
});
