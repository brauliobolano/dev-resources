/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}