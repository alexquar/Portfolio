module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          400: '#59C3FF',
          500: '#35AFFF',
          600: '#0E86D4',
        },
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ],
}
