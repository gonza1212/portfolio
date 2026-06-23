/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        corporate: {
          50:  '#f5f5f4',
          100: '#e8e7e5',
          200: '#d1cfcc',
          400: '#9c9a96',
          600: '#5c5a57',
          700: '#3d3c3a',
          800: '#2a2927',
          900: '#1a1917',
          950: '#0e0d0c',
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['"DM Sans Variable"', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.9rem', { lineHeight: '1.5' }],
        sm: ['1.05rem', { lineHeight: '1.6' }],
        base: ['1.1625rem', { lineHeight: '1.6' }],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
