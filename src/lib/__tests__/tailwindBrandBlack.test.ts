/**
 * RED phase test: verifies that the Tailwind config exposes a brand.black token.
 *
 * Acceptance criteria (task_1):
 *   "GIVEN Tailwind is configured WHEN a component uses bg-brand-black
 *    THEN the correct hex color is applied."
 *
 * This test FAILS before brand.black is added to tailwind.config.ts.
 */
import config from '../../../tailwind.config';

describe('Tailwind brand-black token', () => {
  const colors = (
    config.theme?.extend?.colors as Record<string, Record<string, string>> | undefined
  );

  it('defines brand.black as a valid hex color', () => {
    expect(colors?.brand?.black).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it('brand.black is a near-black hex value', () => {
    const black = colors?.brand?.black ?? '';
    expect(black.toLowerCase()).toBe('#0a0a0a');
  });
});
