/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#22c55e',
        'brand-black': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
