/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      purple: '#635FC7',
      'purple-hover': '#A8A4FF',
      black: '#000112',
      'very-dark-gray': '#20212C',
      'dark-gray': '#2B2C37',
      'lines-dark': '#3E3F4E',
      'medium-gray': '#828FA3',
      'lines-light': '#E4EBFA',
      'light-gray': '#F4F7FD',
      white: '#FFFFFF',
      red: '#EA5555',
      'red-hover': '#FF9898',
      trasparent: 'transparent',
    },
    fontSize: {
      'body-l': ['13px', '23px'],
      'body-m': ['12px', '15px'],
      'heading-s': ['12px', {
        lineHeight: '15px',
        kerning: '2.4px'
      }],
      'heading-m': ['15px', '19px'],
      'heading-l': ['18px', '23px'],
      'heading-lg': ['20px', '25px'],
      'heading-xl': ['24px', '30px'] 
    },
    fontWeight: {
      'body-l': 500,
      'body-m': 700,
      'heading-m': 700,
      'heading-l': 700,
      'heading-xl': 700,
      bold: 700,
    },
    extend: {
      screens: {
        lg: '1440px'
      }
    },
  },
  plugins: [],
}

