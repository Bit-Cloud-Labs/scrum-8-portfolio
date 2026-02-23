/**
 * test_tailwind_brand_colors_defined
 * Asserts that the Tailwind config exposes brand-green and brand-black color tokens.
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const tailwindConfig = require('../../../tailwind.config');

describe('Tailwind brand colors', () => {
  it('test_tailwind_brand_colors_defined — brand-green color token exists', () => {
    const colors = tailwindConfig?.theme?.extend?.colors ?? {};
    expect(colors).toHaveProperty('brand-green');
    expect(typeof colors['brand-green']).toBe('string');
  });

  it('test_tailwind_brand_colors_defined — brand-black color token exists', () => {
    const colors = tailwindConfig?.theme?.extend?.colors ?? {};
    expect(colors).toHaveProperty('brand-black');
    expect(typeof colors['brand-black']).toBe('string');
  });

  it('brand-green is a valid hex color', () => {
    const colors = tailwindConfig?.theme?.extend?.colors ?? {};
    expect(colors['brand-green']).toMatch(/^#[0-9a-fA-F]{3,6}$/);
  });

  it('brand-black is a valid hex color', () => {
    const colors = tailwindConfig?.theme?.extend?.colors ?? {};
    expect(colors['brand-black']).toMatch(/^#[0-9a-fA-F]{3,6}$/);
  });
});
