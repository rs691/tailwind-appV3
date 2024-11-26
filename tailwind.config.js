/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      },
      colors: {
        'tekhelet': {
          DEFAULT: '#503674',
          100: '#100b17',
          200: '#20162e',
          300: '#2f2045',
          400: '#3f2b5c',
          500: '#503674',
          600: '#6f4ca1',
          700: '#9274bd',

          800: '#b7a2d3',
          900: '#dbd1e9',
        },
        'goldenrod': {
          DEFAULT: '#d6a816', 
          100: '#2a2204', 
          200: '#554309', 
          300: '#7f650d', 
          400: '#aa8612', 
          500: '#d6a816', 
          600: '#eac038', 
          700: '#efd069',
          800: '#f5e09b',
          900: '#faefcd',
        },
        'black': {
          DEFAULT: '#000000',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
        },
        'white': {
          DEFAULT: '#ffffff',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
        },
      },





    extend: {},
  },
  plugins: [],
}