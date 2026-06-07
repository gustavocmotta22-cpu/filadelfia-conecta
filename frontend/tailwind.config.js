/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e8f5f0',
          100: '#c5e8d8',
          200: '#9dd8be',
          300: '#70c8a3',
          400: '#4dbb8e',
          500: '#2D7A5F',
          600: '#0F4D3A', // COR PRINCIPAL
          700: '#0a3829',
          800: '#062619',
          900: '#031409',
        },
        church: {
          green:     '#0F4D3A',
          'green-2': '#2D7A5F',
          white:     '#FFFFFF',
          bg:        '#F5F6F7',
          card:      '#FFFFFF',
          text:      '#1A1A1A',
          muted:     '#6B7280',
          border:    '#E5E7EB',
          gold:      '#C9A84C',
        }
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card':  '0 2px 20px rgba(15,77,58,0.08)',
        'card-hover': '0 8px 32px rgba(15,77,58,0.15)',
        'bottom-nav': '0 -4px 20px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-up':   'slideUp 0.4s ease forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
