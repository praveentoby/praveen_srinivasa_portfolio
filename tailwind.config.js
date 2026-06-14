/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0d1117',
        panel: '#121824',
        accent: '#2dd4bf',
        coral: '#fb7185',
        gold: '#fbbf24',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(45, 212, 191, 0.18)',
      },
    },
  },
  plugins: [],
};
