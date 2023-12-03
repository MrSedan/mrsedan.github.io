/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', '*/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        gradientAnim: 'gradientAnimation 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
