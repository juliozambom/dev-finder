import { colors } from './src/shared/styles/colors';
import { fontFamily } from './src/shared/styles/fonts';

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
    './src/shared/**/**/*.{ts,tsx}',
    './src/shared/**/**/*.{ts,tsx}',
    './src/shared/**/**/*.{ts,tsx}',
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
