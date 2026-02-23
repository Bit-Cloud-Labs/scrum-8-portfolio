import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders hero section with name', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the hero section', () => {
    render(<Home />);
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(<Home />);
    expect(screen.getByRole('region', { name: /about/i })).toBeInTheDocument();
  });

  it('renders the projects section', () => {
    render(<Home />);
    expect(screen.getByRole('region', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders the skills section', () => {
    render(<Home />);
    expect(screen.getByRole('region', { name: /skills/i })).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    render(<Home />);
    expect(screen.getByRole('region', { name: /contact/i })).toBeInTheDocument();
  });
});
