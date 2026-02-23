import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

describe('NavBar', () => {
  it('renders the navigation landmark', () => {
    render(<NavBar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders a link to About section', () => {
    render(<NavBar />);
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about');
  });

  it('renders a link to Projects section', () => {
    render(<NavBar />);
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#projects');
  });

  it('renders a link to Skills section', () => {
    render(<NavBar />);
    expect(screen.getByRole('link', { name: /skills/i })).toHaveAttribute('href', '#skills');
  });

  it('renders a link to Contact section', () => {
    render(<NavBar />);
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
  });
});
