/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: '#fdf3f2',
        blushDeep: '#f6d8d0',
        rose: '#b84f5d',
        cacao: '#3a2a26',
        cream: '#fffaf8',
        gold: '#d7b06d',
        sage: '#dfece3',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(61, 42, 41, 0.12)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(255,255,255,0.9), rgba(255,255,255,0) 45%)',
      },
    },
  },
  plugins: [],
};
