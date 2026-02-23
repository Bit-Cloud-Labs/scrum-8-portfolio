import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactSection from '../ContactSection';

describe('ContactSection', () => {
  it('renders the contact heading', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders the section with contact aria-label', () => {
    render(<ContactSection />);
    expect(screen.getByRole('region', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders name input field', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  });

  it('renders email input field', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
  });

  it('renders message textarea', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows validation error when name is empty on submit', async () => {
    render(<ContactSection />);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it('shows validation error when email is invalid', async () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(nameInput, { target: { value: 'Izrael' } });
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.change(messageInput, { target: { value: 'Hello' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it('shows validation error when message is empty', async () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    fireEvent.change(nameInput, { target: { value: 'Izrael' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it('shows success message on valid submit', async () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(nameInput, { target: { value: 'Izrael' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, I would like to connect!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });
});
