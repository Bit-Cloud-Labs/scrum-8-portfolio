import tailwindConfig from '../../../tailwind.config';

describe('Tailwind brand color tokens', () => {
  const colors = (tailwindConfig.theme?.extend?.colors as Record<string, Record<string, string>>)?.brand ?? {};

  it('defines brand.green token', () => {
    expect(colors['green']).toBeDefined();
    expect(typeof colors['green']).toBe('string');
  });

  it('defines brand.black token', () => {
    // brand.black must exist as the primary dark/background color
    expect(colors['black']).toBeDefined();
    expect(typeof colors['black']).toBe('string');
  });
});
