'use client';

import { useState } from 'react';

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INPUT_MAX = 200;
const MESSAGE_MAX = 2000;

/** Contact form section with client-side validation and success state. */
export default function ContactSection() {
  const [fields, setFields] = useState<FormFields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validate(data: FormFields): FormErrors {
    const errs: FormErrors = {};
    if (!data.name.trim()) {
      errs.name = 'Name is required.';
    }
    if (!EMAIL_REGEX.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!data.message.trim()) {
      errs.message = 'Message is required.';
    }
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const truncated = name === 'message' ? value.slice(0, MESSAGE_MAX) : value.slice(0, INPUT_MAX);
    setFields((prev) => ({ ...prev, [name]: truncated }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <section
      aria-label="Contact"
      style={{
        backgroundColor: '#0a0a0a',
        color: '#f9fafb',
        padding: '4rem 2rem',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#22c55e',
          marginBottom: '1.5rem',
        }}
      >
        Contact
      </h2>

      {isSubmitted ? (
        <p style={{ color: '#6ee7b7', fontSize: '1.125rem' }}>
          Thank you for reaching out! I&apos;ll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '480px' }}
          noValidate
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="name" style={{ color: '#d1fae5', fontWeight: 600 }}>
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={fields.name}
              onChange={handleChange}
              style={{
                backgroundColor: '#111827',
                border: '1px solid #374151',
                borderRadius: '0.375rem',
                padding: '0.5rem 0.75rem',
                color: '#f9fafb',
              }}
            />
            {errors.name && (
              <span style={{ color: '#f87171', fontSize: '0.875rem' }}>{errors.name}</span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="email" style={{ color: '#d1fae5', fontWeight: 600 }}>
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleChange}
              style={{
                backgroundColor: '#111827',
                border: '1px solid #374151',
                borderRadius: '0.375rem',
                padding: '0.5rem 0.75rem',
                color: '#f9fafb',
              }}
            />
            {errors.email && (
              <span style={{ color: '#f87171', fontSize: '0.875rem' }}>{errors.email}</span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="message" style={{ color: '#d1fae5', fontWeight: 600 }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={fields.message}
              onChange={handleChange}
              style={{
                backgroundColor: '#111827',
                border: '1px solid #374151',
                borderRadius: '0.375rem',
                padding: '0.5rem 0.75rem',
                color: '#f9fafb',
                resize: 'vertical',
              }}
            />
            {errors.message && (
              <span style={{ color: '#f87171', fontSize: '0.875rem' }}>{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#22c55e',
              color: '#0a0a0a',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              alignSelf: 'flex-start',
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
