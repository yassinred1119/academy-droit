/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d0e5',
          200: '#9fb0d3',
          300: '#7890c0',
          400: '#5b77b2',
          500: '#3e5da5',
          600: '#2e4a8c',
          700: '#1e3470',
          800: '#152455',
          900: '#0d1b3e',
          950: '#080f24',
        },
        gold: {
          50: '#fdf8ec',
          100: '#f9edcc',
          200: '#f3d98f',
          300: '#edc552',
          400: '#e8b52a',
          500: '#c8971a',
          600: '#a87814',
          700: '#8a5d12',
          800: '#6e4a14',
          900: '#5a3c14',
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- هذا السطر السحري هو المفتاح
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
