/**
 * Tests for the email and form validator utilities.
 * These functions live in src/lib/validators.ts.
 */
import { isValidEmail, isNonEmptyString } from '../validators';

describe('isValidEmail', () => {
  it('returns true for a well-formed email address', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('returns true for emails with subdomains', () => {
    expect(isValidEmail('user@mail.example.co.uk')).toBe(true);
  });

  it('returns false for an address without @', () => {
    expect(isValidEmail('notanemail')).toBe(false);
  });

  it('returns false for an address without a domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('returns false for a string with spaces', () => {
    expect(isValidEmail('user @example.com')).toBe(false);
  });
});

describe('isNonEmptyString', () => {
  it('returns true for a non-empty string', () => {
    expect(isNonEmptyString('hello')).toBe(true);
  });

  it('returns false for an empty string', () => {
    expect(isNonEmptyString('')).toBe(false);
  });

  it('returns false for a whitespace-only string', () => {
    expect(isNonEmptyString('   ')).toBe(false);
  });

  it('returns true for a string with surrounding whitespace but real content', () => {
    expect(isNonEmptyString('  hello  ')).toBe(true);
  });
});
