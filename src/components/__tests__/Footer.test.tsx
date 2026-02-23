import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders a contentinfo landmark', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it("renders Izrael's name in the copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(/izrael/i)).toBeInTheDocument();
  });

  it('renders a copyright symbol or "©" text', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo').textContent).toMatch(/©|copyright/i);
  });

  it('renders the current year in the copyright line', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByRole('contentinfo').textContent).toContain(year);
  });
});
