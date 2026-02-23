/**
 * Utility functions for validating user-supplied form values.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns true if the value is a syntactically valid email address. */
export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value);
}

/** Returns true if the value is a non-empty string after trimming whitespace. */
export function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
}
