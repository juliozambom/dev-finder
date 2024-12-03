import { colors } from './src/styles/colors';
import { fontFamily } from './src/styles/fonts';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/app/**/**/*.{ts,tsx}',
    './src/screens/*.{ts,tsx}',
    './src/screens/**/*.{ts,tsx}',
    './src/screens/**/**/*.{ts,tsx}',
    './src/modules/*.{ts,tsx}',
    './src/modules/**/*.{ts,tsx}',
    './src/modules/**/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: ['nativewind/babel'],
  presets: [require('nativewind/preset')],
};
