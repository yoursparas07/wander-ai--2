/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Vivid azure — hero reads as bright Mediterranean sky, not dark void
        night: {
          DEFAULT: '#1B5ABF',
          50: '#F0F7FF',
          100: '#DEEEFF',
          200: '#BDE0FF',
          300: '#8EC8FF',
          400: '#5FAAFF',
          500: '#3A8EF5',
          600: '#2472E0',
          700: '#1B5ABF',
          800: '#1148A8',
          900: '#0C3080',
        },
        // Vivid amber-gold — energetic, warm, pairs with azure
        marigold: {
          DEFAULT: '#FBBF24',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#5C2A06',
        },
        // Vivid emerald — lush, fresh, alive
        teal: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Crisp white — bright, airy, spacious
        ivory: {
          DEFAULT: '#E3E6F0',
          50: '#FFFFFF',
          100: '#F7F9FF',
          200: '#EFF2FB',
          300: '#E3E6F0',
          400: '#C8CEDF',
          500: '#A0A8BF',
          600: '#737D99',
          700: '#4E5875',
          800: '#303A52',
          900: '#1A2030',
        },
        // Clean ink — sharp, readable
        ink: {
          DEFAULT: '#181B30',
          50: '#ECEEF6',
          100: '#C8CCE0',
          200: '#9AA0B8',
          300: '#6A7090',
          400: '#4A5068',
          500: '#343952',
          600: '#242840',
          700: '#181B30',
          800: '#0E1020',
          900: '#05070F',
        },
      },
      fontFamily: {
        fraunces: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'work-sans': ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'stamp': 'stamp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stamp: {
          '0%': { opacity: '0', transform: 'scale(1.4) rotate(-12deg)' },
          '60%': { transform: 'scale(0.95) rotate(2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
