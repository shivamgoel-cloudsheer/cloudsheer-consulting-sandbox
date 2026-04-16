/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        cs: {
          bg:       '#FFFFFF',
          bgcard:   '#FFFFFF',
          bgsub:    '#EFF6FF',   // blue-50
          blue:     '#0176D3',
          electric: '#0099E6',
          navy:     '#032D60',
          dark:     '#1E293B',
          purple:   '#6366F1',
          gold:     '#F59E0B',
          teal:     '#06B6D4',
          muted:    '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue':    '0 0 40px rgba(1,118,211,0.18)',
        'glow-electric':'0 0 60px rgba(0,153,230,0.22)',
        'card':         '0 2px 12px rgba(1,118,211,0.08), 0 0 0 1px rgba(1,118,211,0.09)',
        'card-hover':   '0 8px 32px rgba(1,118,211,0.15), 0 0 0 1px rgba(1,118,211,0.22)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
