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

test('resolves internal shortcut routes to their target page', () => {
  render(
    <MemoryRouter initialEntries={['/a']}>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: 'Accomplishments' })
  ).toBeInTheDocument();
});

test('resolves the gallery shortcut route', () => {
  render(
    <MemoryRouter initialEntries={['/g']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: 'Gallery' })).toBeInTheDocument();
});

test('shows the 404 page for an unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/this-page-does-not-exist']}>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: '404: Not Found.' })
  ).toBeInTheDocument();
});
