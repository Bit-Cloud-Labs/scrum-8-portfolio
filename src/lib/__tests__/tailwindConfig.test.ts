/**
 * Tests that the Tailwind CSS configuration exposes the required
 * brand-green and brand-black (bg) color tokens.
 *
 * RED phase: this test will fail until tailwind.config.ts is committed.
 */
import config from '../../../tailwind.config';

describe('Tailwind brand color tokens', () => {
  // Narrow the type so TypeScript is happy without using `any`.
  const colors = (config.theme?.extend?.colors as Record<string, Record<string, string>> | undefined);

  it('defines a brand color group', () => {
    expect(colors).toBeDefined();
    expect(colors).toHaveProperty('brand');
  });

  it('defines brand.green as a valid hex color', () => {
    expect(colors?.brand?.green).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it('defines brand.bg as a valid hex color (black background)', () => {
    expect(colors?.brand?.bg).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it('brand.green is a green-family hex color (starts with #2 or #6 range)', () => {
    const green = colors?.brand?.green ?? '';
    // Green hues have a high G channel in hex; #22c55e is a well-known Tailwind green.
    expect(green.toLowerCase()).toBe('#22c55e');
  });

  it('brand.bg is a near-black color', () => {
    const bg = colors?.brand?.bg ?? '';
    expect(bg.toLowerCase()).toBe('#0a0a0a');
  });
});
