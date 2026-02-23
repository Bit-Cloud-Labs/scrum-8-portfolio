/**
 * test_globals_css_exists
 * Asserts that globals.css exists and contains Tailwind base directives
 * plus the required CSS custom properties for the green/black brand theme.
 */

import fs from 'fs';
import path from 'path';

const globalsCssPath = path.resolve(process.cwd(), 'src/app/globals.css');

describe('globals.css — Tailwind base + brand CSS variables', () => {
  let cssContent: string;

  beforeAll(() => {
    cssContent = fs.readFileSync(globalsCssPath, 'utf-8');
  });

  it('test_globals_css_exists — file exists at src/app/globals.css', () => {
    expect(fs.existsSync(globalsCssPath)).toBe(true);
  });

  it('test_globals_css_tailwind_base — contains @tailwind base directive', () => {
    expect(cssContent).toContain('@tailwind base');
  });

  it('test_globals_css_tailwind_components — contains @tailwind components directive', () => {
    expect(cssContent).toContain('@tailwind components');
  });

  it('test_globals_css_tailwind_utilities — contains @tailwind utilities directive', () => {
    expect(cssContent).toContain('@tailwind utilities');
  });

  it('test_globals_css_brand_green_var — defines --brand-green CSS custom property', () => {
    expect(cssContent).toContain('--brand-green');
  });

  it('test_globals_css_brand_black_var — defines --brand-black CSS custom property', () => {
    expect(cssContent).toContain('--brand-black');
  });
});
