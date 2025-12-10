/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF8F5',
          100: '#F5F1EB',
          200: '#EBE4D9',
          300: '#E0D6C7',
          400: '#D6C9B5',
          500: '#CCBBA3',
        },
        sage: {
          50: '#F5F8F5',
          100: '#E8F0E8',
          200: '#D1E1D1',
          300: '#B9D2B9',
          400: '#A2C3A2',
          500: '#8BB48B',
          600: '#7BA57B',
          700: '#6B956B',
          800: '#5B855B',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
