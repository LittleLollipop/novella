import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        rainbow: {
          '0%': { 'background-image': 'linear-gradient(to right, red, orange)' },
          '20%': { 'background-image': 'linear-gradient(to right, orange, yellow)' },
          '40%': { 'background-image': 'linear-gradient(to right, yellow, green)' },
          '60%': { 'background-image': 'linear-gradient(to right, green, blue)' },
          '80%': { 'background-image': 'linear-gradient(to right, blue, violet)' },
          '100%': { 'background-image': 'linear-gradient(to right, violet, red)' },
        }
      },
      animation: {
        rainbow: 'rainbow 2s infinite',
      }
    },
  },
  plugins: [],
}
export default config
