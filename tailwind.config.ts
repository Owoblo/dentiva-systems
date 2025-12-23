import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy (Primary Background / Text)
        navy: {
          50: '#F5F7FA',
          100: '#EAEFF5',
          200: '#D0DBEB',
          300: '#A6C0DE',
          400: '#759CCC',
          500: '#4D7AB0',
          600: '#355B8C',
          700: '#2A466B',
          800: '#15243B', // Main Dark BG
          900: '#0B1120', // Deepest
          950: '#020610',
        },
        // Premium Teal (Trust & Medical)
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF', // Bright Accent
          500: '#14B8A6', // Primary Brand
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59', // Dark Accent
          900: '#134E4A',
        },
        // Gold / Platinum (Premium Accents)
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Standard Gold
          600: '#D97706',
          700: '#B45309',
        },
        // Slate / Platinum (Surface & Text)
        slate: {
          850: '#1e293b', // Custom Dark Surface
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2DD4BF40 0deg, #3B82F640 180deg, #2DD4BF40 360deg)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
