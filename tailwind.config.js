/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '380px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#2563EB',
        'primary-light': '#3B82F6',
        'primary-dark': '#1D4ED8',
        secondary: '#10B981',
        'secondary-light': '#34D399',
        'secondary-dark': '#059669',
        accent: '#F59E0B',
        'accent-light': '#FBBF24',
      },
      borderRadius: {
        'sm': '8px',
        DEFAULT: '12px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      keyframes: {
        'blob-morph': {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' },
          '25%': { borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%' },
          '50%': { borderRadius: '30% 70% 60% 40% / 60% 40% 70% 30%' },
          '75%': { borderRadius: '70% 30% 40% 60% / 40% 70% 50% 60%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 99, 235, 0)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px)' },
          '75%': { transform: 'translateX(8px)' },
        },
        'scalePop': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'skeleton': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'blob-morph': 'blob-morph 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-glow': 'pulse-glow 2s infinite',
        'shake': 'shake 0.4s ease-in-out',
        'scale-pop': 'scalePop 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'skeleton': 'skeleton 1.5s infinite',
      }
    },
  },
  plugins: [],
};