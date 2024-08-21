/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'vsc-',
  corePlugins: {
    preflight: import.meta.env.VITE_HISTOIRE === 'true',
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
