import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders the developer name', () => {
    render(<HeroSection name="Izrael" tagline="Full-Stack Developer" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Izrael');
  });

  it('renders the tagline', () => {
    render(<HeroSection name="Izrael" tagline="Full-Stack Developer" />);
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
  });

  it('renders the section with hero aria-label', () => {
    render(<HeroSection name="Izrael" tagline="Full-Stack Developer" />);
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument();
  });

  it('renders a call to action link to projects', () => {
    render(<HeroSection name="Izrael" tagline="Full-Stack Developer" />);
    const link = screen.getByRole('link', { name: /view my work/i });
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('renders a contact CTA link', () => {
    render(<HeroSection name="Izrael" tagline="Full-Stack Developer" />);
    const link = screen.getByRole('link', { name: /contact me/i });
    expect(link).toHaveAttribute('href', '#contact');
  });
});
