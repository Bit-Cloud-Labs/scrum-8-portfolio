import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('smoke: app mounts', () => {
  it('test_smoke_app_renders — root page mounts without throwing', () => {
    expect(() => render(<Home />)).not.toThrow();
  });

  it('renders an h1 heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
