/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#060908',
          dark: '#090d0b',
          surface: '#0d1310',
          card: '#111814',
          'card-hover': '#16211b',
          border: '#1b2820',
          'border-light': '#263b2f',
          green: '#00e676',
          'green-glow': '#00ff87',
          emerald: '#10b981',
          darkgreen: '#082f1b',
          muted: '#8b9e94',
          text: '#e6ede9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'Dancing Script', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 230, 118, 0.2)',
        'glow': '0 0 25px rgba(0, 230, 118, 0.35)',
        'glow-lg': '0 0 45px rgba(0, 230, 118, 0.5)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
