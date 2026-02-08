/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2563EB',
          DEFAULT: '#2563EB',
        },
        secondary: {
          blue: '#60A5FA',
          DEFAULT: '#60A5FA',
        },
        success: {
          green: '#22C55E',
          DEFAULT: '#22C55E',
        },
        accent: {
          orange: '#F59E0B',
          DEFAULT: '#F59E0B',
        },
        app: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
        },
        text: {
          primary: '#0F172A',
          muted: '#64748B',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
      },
    },
  },
  plugins: [],
}
