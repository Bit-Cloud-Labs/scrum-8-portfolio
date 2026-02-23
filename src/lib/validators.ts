/**
 * Utility functions for validating user-supplied form values.
 */

/** Returns true if the value is a syntactically valid email address. */
export function isValidEmail(value: string): boolean {
  if (!value || value.length === 0) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

/** Returns true if the value is a non-empty string after trimming whitespace. */
export function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
}
