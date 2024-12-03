/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./app/**/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: ["nativewind/babel"],
  presets: [require("nativewind/preset")],
}

