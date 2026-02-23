import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  const bio = 'I am a passionate developer with a love for clean code.';

  it('renders the about heading', () => {
    render(<AboutSection bio={bio} />);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  it('renders the bio text', () => {
    render(<AboutSection bio={bio} />);
    expect(screen.getByText(bio)).toBeInTheDocument();
  });

  it('renders the section with about aria-label', () => {
    render(<AboutSection bio={bio} />);
    expect(screen.getByRole('region', { name: /about/i })).toBeInTheDocument();
  });
});
